import { HttpOperation, Swagger } from "../swagger/Swagger";
export declare const defaultResponseTypeName = "ResponseWithBody";
/**
 * Renders a swagger schema HttpOperation's response types to a pipe delimitered union type string.
 *
 * @param {string} responseTypeName - The desired response type name. ie "ResponseWithBody"
 * @param {HttpOperation} httpOperation - A Swagger HttpOperation
 * @param {Swagger} swagger - A Swagger schema
 * @returns {string} A string containing a pipe delimitered union type string. "ResponseWithBody<200, ThingBody> | ResponseWithBody<number, ErrorBody>"
 */
export declare const renderResponseTypes: (
  responseTypeName: string,
  httpOperation: HttpOperation,
  swagger: Swagger
) => string;
/** @deprecated use getResponseTypes instead, this function will be removed in a future version. */
export declare function getSuccessfulResponseType(
  op: HttpOperation,
  swagger: Swagger
): [string, boolean];
//# sourceMappingURL=responseType.d.ts.map
