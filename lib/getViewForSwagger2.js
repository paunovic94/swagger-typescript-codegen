"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const method_1 = require("./view-data/method");
const definition_1 = require("./view-data/definition");
const operation_1 = require("./view-data/operation");
function getViewForSwagger2(opts) {
    const swagger = normalizeResponseDefinitions(opts.swagger);
    const data = {
        isES6: opts.isES6,
        description: swagger.info.description,
        isSecure: swagger.securityDefinitions !== undefined,
        isSecureToken: false,
        isSecureApiKey: false,
        isSecureBasic: false,
        moduleName: opts.moduleName,
        className: opts.className,
        imports: opts.imports,
        domain: swagger.schemes &&
            swagger.schemes.length > 0 &&
            swagger.host &&
            swagger.basePath
            ? `${swagger.schemes[0]}://${swagger.host}${swagger.basePath.replace(/\/+$/g, "")}`
            : "",
        methods: [],
        definitions: []
    };
    data.methods = makeMethodsFromPaths(data, opts, swagger);
    const latestVersions = method_1.getLatestVersionOfMethods(data.methods);
    data.methods = data.methods.map(setIsLatestVersion(latestVersions));
    data.definitions = definition_1.makeDefinitionsFromSwaggerDefinitions(swagger.definitions, swagger);
    return Object.assign({}, data);
}
exports.getViewForSwagger2 = getViewForSwagger2;
function normalizeResponseDefinitions(swagger) {
    // ensure that the optional swagger.responses and swagger.definitions fields are present
    swagger.responses = swagger.responses || {};
    swagger.definitions = swagger.definitions || {};
    // inject swagger.response defs into swagger.definitions
    // prefixing them with "Response_" on name clashes with existing definitions
    Object.entries(swagger.responses).forEach(([name, def]) => {
        if (!def.schema || def.schema.$ref) {
            return;
        }
        const defName = (swagger.definitions[name] ? "Response_" : "") + name;
        swagger.definitions[defName] = def.schema;
        def.schema = { $ref: `#/definitions/${defName}` };
    });
    // inject inline response definitions into swagger.definitions
    // the corresponding def name will be constructed like "Response_${opName}_${responseCode}"
    // in order to avoid name clashes
    operation_1.getHttpMethodTuplesFromSwaggerPathsObject(swagger.paths).forEach(([path, httpVerb, op]) => {
        const responses = op.responses;
        Object.entries(responses).forEach(([resCode, resDef]) => {
            const schema = resDef.schema;
            if (schema && !schema.$ref) {
                const methodName = method_1.makeMethodName(path, httpVerb, op);
                const defName = `Response_${methodName}_${resCode}`;
                swagger.definitions[defName] = schema;
                resDef.schema = { $ref: `#/definitions/${defName}` };
            }
        });
    });
    // remove one level of indirection (refs pointing to swagger.responses)
    // from the endpoint.responses defs by redirecting them directly to the
    // corresponding ref into swagger.definitions
    operation_1.getHttpMethodTuplesFromSwaggerPathsObject(swagger.paths).forEach(([_path, _httpVerb, op]) => {
        const responses = op.responses;
        Object.keys(responses).forEach(r => {
            const ref = responses[r].$ref;
            if (ref) {
                const def = lodash_1.get(swagger, ref.substring(2).split("/")); // remove leading "#/"
                responses[r] = def;
            }
        });
    });
    // swagger.responses is not used/required anymore
    delete swagger.responses;
    return swagger;
}
function setIsLatestVersion(latestVersions) {
    return method => latestVersions.indexOf(method) > -1
        ? Object.assign({}, method, { isLatestVersion: true }) : method;
}
const makeMethodsFromPaths = (data, opts, swagger) => operation_1.getHttpMethodTuplesFromSwaggerPathsObject(swagger.paths)
    .filter(method => (opts.includeDeprecated && operation_1.isAuthorizedMethod(method)) ||
    operation_1.isAuthorizedAndNotDeprecated(method))
    .map(([path, httpVerb, op, globalParams]) => {
    // TODO: Start of untested security stuff that needs fixing
    const secureTypes = [];
    if (swagger.securityDefinitions !== undefined ||
        op.security !== undefined) {
        const mergedSecurity = lodash_1.merge([], swagger.security, op.security).map(security => Object.keys(security));
        if (swagger.securityDefinitions) {
            for (const sk in swagger.securityDefinitions) {
                if (mergedSecurity.join(",").indexOf(sk) !== -1) {
                    secureTypes.push(swagger.securityDefinitions[sk].type);
                }
            }
        }
    }
    // End of untested
    const method = method_1.makeMethod(path, opts, swagger, httpVerb, op, secureTypes, globalParams);
    // TODO: It seems the if statements below are pretty weird...
    // This runs in a for loop which is run for every "method"
    // in every "api" but we modify the parameter passed in to the
    // function, therefore changing the global state by setting it to
    // the last api + method combination?
    // No test covers this scenario at the moment.
    if (method.isSecure && method.isSecureToken) {
        data.isSecureToken = method.isSecureToken;
    }
    if (method.isSecure && method.isSecureApiKey) {
        data.isSecureApiKey = method.isSecureApiKey;
    }
    if (method.isSecure && method.isSecureBasic) {
        data.isSecureBasic = method.isSecureBasic;
    }
    // End of weird statements
    return method;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Vmlld0ZvclN3YWdnZXIyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dldFZpZXdGb3JTd2FnZ2VyMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUdwQywrQ0FLNEI7QUFDNUIsdURBR2dDO0FBQ2hDLHFEQUkrQjtBQW1CL0IsU0FBZ0Isa0JBQWtCLENBQUMsSUFBb0I7SUFDckQsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTNELE1BQU0sSUFBSSxHQUFhO1FBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXO1FBQ3JDLFFBQVEsRUFBRSxPQUFPLENBQUMsbUJBQW1CLEtBQUssU0FBUztRQUNuRCxhQUFhLEVBQUUsS0FBSztRQUNwQixjQUFjLEVBQUUsS0FBSztRQUNyQixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7UUFDM0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztRQUNyQixNQUFNLEVBQ0osT0FBTyxDQUFDLE9BQU87WUFDZixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxJQUFJO1lBQ1osT0FBTyxDQUFDLFFBQVE7WUFDZCxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ2hFLE9BQU8sRUFDUCxFQUFFLENBQ0gsRUFBRTtZQUNMLENBQUMsQ0FBQyxFQUFFO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtLQUNoQixDQUFDO0lBRUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxv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