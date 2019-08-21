import { CodeGenOptions } from "../options/options";
import { Swagger, HttpOperation, Parameter } from "../swagger/Swagger";
import { TypeSpecParameter } from "./parameter";
import { Header } from "./headers";
export interface Method {
  readonly methodName: string;
  readonly intVersion: number;
  readonly isLatestVersion: boolean;
  readonly isSecure: boolean;
  readonly isSecureToken: boolean;
  readonly isSecureApiKey: boolean;
  readonly isSecureBasic: boolean;
  readonly path: string;
  readonly pathFormatString: string;
  readonly className: string;
  readonly version: string;
  readonly method: string;
  readonly isGET: boolean;
  readonly isPOST: boolean;
  readonly isDeprecated: boolean;
  readonly summary: string;
  readonly externalDocs: string;
  readonly parameters: TypeSpecParameter[];
  readonly headers: Header[];
  readonly responseTypes: string;
  /** @deprecated use responseTypes instead, this field will be removed in a future version. */
  readonly successfulResponseType: string;
  /** @deprecated use responseTypes instead, this field will be removed in a future version. */
  readonly successfulResponseTypeIsRef: boolean;
}
export declare function makeMethodName(
  path: string,
  httpVerb: string,
  op: HttpOperation
): string;
export declare function makeMethod(
  path: string,
  opts: CodeGenOptions,
  swagger: Swagger,
  httpVerb: string,
  op: HttpOperation,
  secureTypes: string[],
  globalParams: ReadonlyArray<Parameter>
): Method;
export declare const getLatestVersionOfMethods: (a1: Method[]) => Method[];
//# sourceMappingURL=method.d.ts.map
