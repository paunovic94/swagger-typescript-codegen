/// <reference types="js-beautify" />
import * as Mustache from "mustache";
import { Swagger } from "../swagger/Swagger";
export interface TemplateLocations {
  readonly class: string;
  readonly method: string;
  readonly type: string;
}
interface Options {
  readonly isES6: boolean;
  readonly moduleName: string;
  readonly includeDeprecated: boolean;
  readonly imports: ReadonlyArray<string>;
  readonly className: string;
  readonly template: Partial<TemplateLocations>;
  readonly mustache: typeof Mustache;
  readonly beautify: ((source: string) => string) | boolean;
  readonly beautifyOptions: JsBeautifyOptions;
}
interface SwaggerOption {
  readonly swagger: Swagger;
}
export interface CodeGenOptions extends Options, SwaggerOption {}
export interface ProvidedCodeGenOptions
  extends Partial<Options>,
    SwaggerOption {}
export declare function makeOptions(
  options: ProvidedCodeGenOptions
): CodeGenOptions;
export {};
//# sourceMappingURL=options.d.ts.map
