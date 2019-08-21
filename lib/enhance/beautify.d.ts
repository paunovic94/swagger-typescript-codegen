/// <reference types="js-beautify" />
export declare type Beautify =
  | ((source: string) => string)
  | boolean
  | undefined;
export declare type BeautifyOptions = JsBeautifyOptions;
export declare function beautifyCode(
  beautify: Beautify,
  source: string,
  options?: BeautifyOptions
): string;
//# sourceMappingURL=beautify.d.ts.map
