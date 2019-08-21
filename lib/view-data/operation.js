"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Swagger_1 = require("../swagger/Swagger");
const fp_1 = require("lodash/fp");
const getPathParameters = (api) => api.parameters || [];
const onlyHttpVerbEntries = (httpVerbAndOperation) => {
    // Since we're using a type predicate here to assert if the httpVerb is a valid HttpMethod and we want to keep the original
    // schemasAllowedHttpMethods a strongly typed list of HttpMethods we'll cast it here to a list of strings to make
    // sure we can call indexOf on it.
    return (Swagger_1.schemaAllowedHttpMethods.indexOf(httpVerbAndOperation[0]) > -1);
};
const addPathAndPathParams = ([path, api]) => fp_1.entries(api)
    .filter(onlyHttpVerbEntries)
    .map(([httpVerb, httpOperationDescription]) => [
    path,
    httpVerb,
    httpOperationDescription,
    getPathParameters(api)
]);
const operationIsNotDeprecated = ([_path, _httpVerb, op]) => !op.deprecated;
// TODO: This list seems too extensive. Leaving this for now to be backwards compatible, but this check can probably be removed and we can
// leave it up to the schema. This way we are verifying if the schema is valid which seems out of scope.
// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#path-item-object
const authorizedMethods = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "COPY",
    "HEAD",
    "OPTIONS",
    "LINK",
    "UNLINK",
    "PURGE",
    "LOCK",
    "UNLOCK",
    "PROPFIND"
];
exports.isAuthorizedMethod = ([_path, httpVerb]) => authorizedMethods.indexOf(httpVerb.toUpperCase()) > -1;
exports.isAuthorizedAndNotDeprecated = (httpOperationEntryWithPathParamsAndPath) => operationIsNotDeprecated(httpOperationEntryWithPathParamsAndPath) &&
    exports.isAuthorizedMethod(httpOperationEntryWithPathParamsAndPath);
exports.getHttpMethodTuplesFromSwaggerPathsObject = (paths) => fp_1.flatten(fp_1.entries(paths).map(addPathAndPathParams));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXctZGF0YS9vcGVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFTNEI7QUFDNUIsa0NBQTZDO0FBRTdDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFtQixFQUE0QixFQUFFLENBQzFFLEdBQUcsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0FBRXZCLE1BQU0sbUJBQW1CLEdBQUcsQ0FDMUIsb0JBQTZDLEVBQ1EsRUFBRTtJQUN2RCwySEFBMkg7SUFDM0gsaUhBQWlIO0lBQ2pILGtDQUFrQztJQUNsQyxPQUFPLENBQ0osa0NBQXFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzdFLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FDNUIsSUFBSSxFQUNKLEdBQUcsQ0FDZ0IsRUFBc0MsRUFBRSxDQUMzRCxZQUFPLENBQWdCLEdBQUcsQ0FBQztLQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUM7S0FDM0IsR0FBRyxDQUNGLENBQUMsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBR25DLEVBQW9DLEVBQUUsQ0FBQztJQUN0QyxJQUFJO0lBQ0osUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixpQkFBaUIsQ0FBQyxHQUFHLENBQUM7Q0FDdkIsQ0FDRixDQUFDO0FBRU4sTUFBTSx3QkFBd0IsR0FBRyxDQUFDLENBQ2hDLEtBQUssRUFDTCxTQUFTLEVBQ1QsRUFBRSxDQUMrQixFQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7QUFFaEUsMElBQTBJO0FBQzFJLHdHQUF3RztBQUN4Ryw0RkFBNEY7QUFDNUYsTUFBTSxpQkFBaUIsR0FBRztJQUN4QixLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1IsVUFBVTtDQUNYLENBQUM7QUFDVyxRQUFBLGtCQUFrQixHQUFHLENBQUMsQ0FDakMsS0FBSyxFQUNMLFFBQVEsQ0FDeUIsRUFBVyxFQUFFLENBQzlDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUU1QyxRQUFBLDRCQUE0QixHQUFHLENBQzFDLHVDQUF5RSxFQUNoRSxFQUFFLENBQ1gsd0JBQXdCLENBQUMsdUNBQXVDLENBQUM7SUFDakUsMEJBQWtCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztBQUVqRCxRQUFBLHlDQUF5QyxHQUFHLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQzlFLFlBQU8sQ0FBQyxZQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyJ9