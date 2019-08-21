"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseType_1 = require("./responseType");
const version_1 = require("./version");
const parameter_1 = require("./parameter");
const headers_1 = require("./headers");
const lodash_1 = require("lodash");
const fp_1 = require("lodash/fp");
const fp_2 = require("lodash/fp");
function makeMethodName(path, httpVerb, op) {
    return op.operationId
        ? normalizeName(op.operationId)
        : getPathToMethodName(httpVerb, path);
}
exports.makeMethodName = makeMethodName;
function makeMethod(path, opts, swagger, httpVerb, op, secureTypes, globalParams) {
    const methodName = makeMethodName(path, httpVerb, op);
    const [successfulResponseType, successfulResponseTypeIsRef] = responseType_1.getSuccessfulResponseType(op, swagger);
    return {
        path,
        pathFormatString: path.replace(/{/g, "${parameters."),
        className: opts.className,
        methodName,
        version: version_1.getVersion(path),
        intVersion: version_1.getIntVersion(path),
        method: httpVerb.toUpperCase(),
        isGET: httpVerb.toUpperCase() === "GET",
        isPOST: httpVerb.toUpperCase() === "POST",
        isDeprecated: op.deprecated,
        summary: op.description || op.summary,
        externalDocs: op.externalDocs,
        isSecure: swagger.security !== undefined || op.security !== undefined,
        isSecureToken: secureTypes.indexOf("oauth2") !== -1,
        isSecureApiKey: secureTypes.indexOf("apiKey") !== -1,
        isSecureBasic: secureTypes.indexOf("basic") !== -1,
        parameters: parameter_1.getParametersForMethod(globalParams, op.parameters, swagger),
        headers: headers_1.getHeadersForMethod(op, swagger),
        successfulResponseType,
        successfulResponseTypeIsRef,
        responseTypes: responseType_1.renderResponseTypes(responseType_1.defaultResponseTypeName, op, swagger),
        isLatestVersion: false
    };
}
exports.makeMethod = makeMethod;
const charactersToBeReplacedWithUnderscore = /\.|\-|\{|\}/g;
function normalizeName(id) {
    return id.replace(charactersToBeReplacedWithUnderscore, "_");
}
function getPathToMethodName(httpVerb, path) {
    // clean url path for requests ending with '/'
    const cleanPath = path.replace(/\/$/, "");
    let segments = cleanPath.split("/").slice(1);
    segments = lodash_1.transform(segments, (result, segment) => {
        if (segment[0] === "{" && segment[segment.length - 1] === "}") {
            segment = `by${segment[1].toUpperCase()}${segment.substring(2, segment.length - 1)}`;
        }
        result.push(segment);
    });
    const result = lodash_1.camelCase(segments.join("-"));
    return `${httpVerb.toLowerCase()}${result[0].toUpperCase()}${result.substring(1)}`;
}
const groupMethodsByMethodName = (methods) => fp_1.values(fp_1.groupBy("methodName", methods));
const sortByVersion = (methods) => fp_1.sortBy("intVersion", methods);
const pickLast = (methods) => methods[methods.length - 1];
const isNotUndefined = (method) => !fp_1.isUndefined(method);
const getLatestVersionOfMethod = fp_1.map(fp_2.compose(pickLast, sortByVersion));
exports.getLatestVersionOfMethods = fp_2.compose(fp_1.filter(isNotUndefined), getLatestVersionOfMethod, groupMethodsByMethodName);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXctZGF0YS9tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpREFJd0I7QUFDeEIsdUNBQXNEO0FBQ3RELDJDQUF3RTtBQUN4RSx1Q0FBd0Q7QUFDeEQsbUNBQThDO0FBQzlDLGtDQUE4RTtBQUM5RSxrQ0FBb0M7QUE4QnBDLFNBQWdCLGNBQWMsQ0FDNUIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLEVBQWlCO0lBRWpCLE9BQU8sRUFBRSxDQUFDLFdBQVc7UUFDbkIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQVJELHdDQVFDO0FBRUQsU0FBZ0IsVUFBVSxDQUN4QixJQUFZLEVBQ1osSUFBb0IsRUFDcEIsT0FBZ0IsRUFDaEIsUUFBZ0IsRUFDaEIsRUFBaUIsRUFDakIsV0FBcUIsRUFDckIsWUFBc0M7SUFFdEMsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEQsTUFBTSxDQUNKLHNCQUFzQixFQUN0QiwyQkFBMkIsQ0FDNUIsR0FBRyx3Q0FBeUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFM0MsT0FBTztRQUNMLElBQUk7UUFDSixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7UUFDckQsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFVBQVU7UUFDVixPQUFPLEVBQUUsb0JBQVUsQ0FBQyxJQUFJLENBQUM7UUFDekIsVUFBVSxFQUFFLHVCQUFhLENBQUMsSUFBSSxDQUFDO1FBQy9CLE1BQU0sRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFO1FBQzlCLEtBQUssRUFBRSxR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