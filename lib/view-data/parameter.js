"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = require("lodash/fp");
const typescript_1 = require("../typescript");
//Ignore parameters which contain the x-exclude-from-bindings extension
const isExcludeFromBindingHeader = (parameter) => parameter["x-exclude-from-bindings"] === true;
// Ignore headers which are injected by proxies & app servers
// eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
const isProxyHeader = (parameter) => parameter["x-exclude-from-bindings"] === true;
const isNotParameterToBeIgnored = (parameter) => !isExcludeFromBindingHeader(parameter) && !isProxyHeader(parameter);
exports.getParametersForMethod = (globalParams, params = [], swagger) => params
    .concat(globalParams)
    .filter(isNotParameterToBeIgnored)
    .map((parameter) => makeTypeSpecParameter(parameter, swagger));
function makeTypespecParameterFromSwaggerParameter(parameter, swagger) {
    const isSingleton = parameter.enum && parameter.enum.length === 1;
    return Object.assign({}, parameter, { camelCaseName: fp_1.camelCase(parameter.name), isBodyParameter: false, isPathParameter: false, isQueryParameter: false, isHeaderParameter: false, isFormParameter: false, cardinality: parameter.required ? "" : "?", tsType: typescript_1.convertType(parameter, swagger), isSingleton, singleton: isSingleton ? parameter.enum[0] : undefined });
}
function makeTypeSpecParameter(parameter, swagger) {
    if (fp_1.isString(parameter.$ref)) {
        const segments = parameter.$ref.split("/");
        parameter =
            swagger.parameters[segments.length === 1 ? segments[0] : segments[2]];
    }
    switch (parameter.in) {
        case "body":
            return makeBodyParameter(parameter, swagger);
            break;
        case "path":
            return makePathParameter(parameter, swagger);
            break;
        case "query":
            return makeQueryParameter(parameter, swagger);
            break;
        case "header":
            return makeHeaderParameter(parameter, swagger);
            break;
        case "formData":
            return makeFormParameter(parameter, swagger);
            break;
        default:
            neverGuard(parameter.in);
    }
    throw new Error("Unsupported parameter type");
}
function neverGuard(_v) { }
function makeBodyParameter(parameter, swagger) {
    return Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger), { isBodyParameter: true });
}
function makePathParameter(parameter, swagger) {
    return Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger), { isPathParameter: true });
}
function makeQueryParameter(parameter, swagger) {
    return Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger), { isQueryParameter: true, pattern: parameter["x-name-pattern"], isPatternType: parameter["x-name-pattern"] !== undefined });
}
function makeHeaderParameter(parameter, swagger) {
    return Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger), { isHeaderParameter: true });
}
function makeFormParameter(parameter, swagger) {
    return Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger), { isFormParameter: true });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXctZGF0YS9wYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBZ0Q7QUFDaEQsOENBQTRDO0FBYzVDLHVFQUF1RTtBQUN2RSxNQUFNLDBCQUEwQixHQUFHLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQzFELFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLElBQUksQ0FBQztBQUVoRCw2REFBNkQ7QUFDN0QsNkVBQTZFO0FBQzdFLE1BQU0sYUFBYSxHQUFHLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQzdDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLElBQUksQ0FBQztBQUVoRCxNQUFNLHlCQUF5QixHQUFHLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQ3pELENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekQsUUFBQSxzQkFBc0IsR0FBRyxDQUNwQyxZQUFzQyxFQUN0QyxTQUFtQyxFQUFFLEVBQ3JDLE9BQWdCLEVBQ0ssRUFBRSxDQUN2QixNQUFNO0tBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQztLQUNwQixNQUFNLENBQUMseUJBQXlCLENBQUM7S0FDakMsR0FBRyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFFOUUsU0FBUyx5Q0FBeUMsQ0FDaEQsU0FBb0IsRUFDcEIsT0FBZ0I7SUFFaEIsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFFbEUseUJBQ0ssU0FBUyxJQUNaLGFBQWEsRUFBRSxjQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUN4QyxlQUFlLEVBQUUsS0FBSyxF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