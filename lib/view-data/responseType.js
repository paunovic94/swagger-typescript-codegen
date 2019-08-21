"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("../typescript");
const fp_1 = require("lodash/fp");
const defaultResponseType = "void";
const defaultHttpStatusType = "number";
exports.defaultResponseTypeName = "ResponseWithBody";
/**
 * Renders a swagger schema HttpOperation's response types to a pipe delimitered union type string.
 *
 * @param {string} responseTypeName - The desired response type name. ie "ResponseWithBody"
 * @param {HttpOperation} httpOperation - A Swagger HttpOperation
 * @param {Swagger} swagger - A Swagger schema
 * @returns {string} A string containing a pipe delimitered union type string. "ResponseWithBody<200, ThingBody> | ResponseWithBody<number, ErrorBody>"
 */
exports.renderResponseTypes = (responseTypeName, httpOperation, swagger) => fp_1.uniq(responseTypesToStrings(responseTypeName, convertResponseTypes(responseTypes(httpOperation), swagger))).join(" | ");
/**
 * Extracts the response types from a HttpOperation.
 *
 * @param {HttpOperation} httpOperation - The HttpOperation.
 * @returns {ResponseType<SwaggerType>[]} The response types.
 */
const responseTypes = (httpOperation) => fp_1.entries(httpOperation.responses).map(kvp => ({
    statusType: kvp[0],
    bodyType: kvp[1]
}));
/**
 * Converts an array of swagger schema response types to a typescript response types array.
 *
 * @param {ResponseType<SwaggerType>[]} swaggerTypes - The swagger response types to convert.
 * @param {Swagger} swagger - The swagger schema.
 * @returns {ResponseType<TypeSpec>[]} The converted typescript response types.
 */
const convertResponseTypes = (swaggerTypes, swagger) => swaggerTypes.map(swaggerType => convertResponseType(swaggerType, swagger));
/**
 * Converts a swagger schema response type to a typescript response type.
 *
 * @param {ResponseType<SwaggerType>} swaggerType - The swagger response type to convert.
 * @param {Swagger} swagger - The swagger schema.
 * @returns {ResponseType<TypeSpec>} The converted typescript response type.
 */
const convertResponseType = (swaggerType, swagger) => ({
    statusType: convertStatusType(swaggerType.statusType),
    bodyType: typescript_1.convertType(swaggerType.bodyType, swagger)
});
/**
 * Converts a http status code swagger schema type, to a typescript type string.
 *
 * @param {string} str - The string to convert.
 * @returns {string} A string value representing the typescript type.
 */
const convertStatusType = (str) => isHttpStatusCode(str) ? str : defaultHttpStatusType;
/**
 * Checks string is a number between 100 and 599.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} A boolean indicating that the string is a http status code.
 */
const isHttpStatusCode = (str) => str.match(/^[1-5]\d{2}$/) !== null;
/**
 * Converts an array of typescript response types to an array of strings.
 *
 * @param {string} responseTypeName
 * @param {ResponseType<TypeSpec>[]} typeSpecs
 */
const responseTypesToStrings = (responseTypeName, typeSpecs) => typeSpecs.map(ts => responseTypeToString(responseTypeName, ts));
/**
 * Converts a typescript response type to string.
 *
 * @param {string} responseTypeName
 * @param {ResponseType<TypeSpec>} typeSpec
 * @returns {string}
 */
const responseTypeToString = (responseTypeName, typeSpec) => `${responseTypeName}<${typeSpec.statusType}, ${typeSpecToString(typeSpec.bodyType)}>`;
/**
 * Converts a TypeSpec to string representation.
 *
 * @param {TypeSpec} typeSpec - A TypeSpec
 * @returns {string} A string
 */
const typeSpecToString = (typeSpec) => typeSpec.target || typeSpec.tsType || defaultResponseType;
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success
/** @deprecated use getResponseTypes instead, this function will be removed in a future version. */
const successfulCodes = [
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "226" // IM Used
];
/** @deprecated use getResponseTypes instead, this function will be removed in a future version. */
function onlySuccessful(statusCode) {
    return successfulCodes.includes(statusCode);
}
/** @deprecated use getResponseTypes instead, this function will be removed in a future version. */
function getSuccessfulResponse(op) {
    const definedSuccessCodes = Object.keys(op.responses).filter(onlySuccessful);
    if (definedSuccessCodes.length === 0) {
        throw new Error("No success responses defined");
    }
    return op.responses[definedSuccessCodes[0]];
}
/** @deprecated use getResponseTypes instead, this function will be removed in a future version. */
function getSuccessfulResponseType(op, swagger) {
    let successfulResponseTypeIsRef = false;
    let successfulResponseType;
    try {
        const successfulResponse = getSuccessfulResponse(op);
        const convertedType = typescript_1.convertType(successfulResponse, swagger);
        if (convertedType.target) {
            successfulResponseTypeIsRef = true;
        }
        successfulResponseType =
            convertedType.target || convertedType.tsType || defaultResponseType;
    }
    catch (error) {
        successfulResponseType = defaultResponseType;
    }
    return [successfulResponseType, successfulResponseTypeIsRef];
}
exports.getSuccessfulResponseType = getSuccessfulResponseType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2VUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXctZGF0YS9yZXNwb25zZVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNEM7QUFFNUMsa0NBQTBDO0FBRzFDLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0FBQ25DLE1BQU0scUJBQXFCLEdBQUcsUUFBUSxDQUFDO0FBRTFCLFFBQUEsdUJBQXVCLEdBQUcsa0JBQWtCLENBQUM7QUFPMUQ7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsbUJBQW1CLEdBQUcsQ0FDakMsZ0JBQXdCLEVBQ3hCLGFBQTRCLEVBQzVCLE9BQWdCLEVBQ1IsRUFBRSxDQUNWLFNBQUksQ0FDRixzQkFBc0IsQ0FDcEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FDNUQsQ0FDRixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUVoQjs7Ozs7R0FLRztBQUNILE1BQU0sYUFBYSxHQUFHLENBQ3BCLGFBQTRCLEVBQ0MsRUFBRSxDQUMvQixZQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDakIsQ0FBQyxDQUFDLENBQUM7QUFFTjs7Ozs7O0dBTUc7QUFDSCxNQUFNLG9CQUFvQixHQUFHLENBQzNCLFlBQXlDLEVBQ3pDLE9BQWdCLEVBQ1UsRUFBRSxDQUM1QixZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFFN0U7Ozs7OztHQU1HO0FBQ0gsTUFBTSxtQkFBbUIsR0FBRyxDQUMxQixX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