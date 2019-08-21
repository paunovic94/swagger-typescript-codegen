import { HttpOperation, Parameter, HttpMethod, PathsObject } from "../swagger/Swagger";
export declare const isAuthorizedMethod: ([_path, httpVerb]: [string, HttpMethod, HttpOperation, readonly Parameter[]]) => boolean;
export declare const isAuthorizedAndNotDeprecated: (httpOperationEntryWithPathParamsAndPath: [string, HttpMethod, HttpOperation, readonly Parameter[]]) => boolean;
export declare const getHttpMethodTuplesFromSwaggerPathsObject: (paths: PathsObject) => [string, HttpMethod, HttpOperation, readonly Parameter[]][];
//# sourceMappingURL=operation.d.ts.map