import { CodeGenOptions, ProvidedCodeGenOptions } from "./options/options";
import { getViewForSwagger2 } from "./getViewForSwagger2";
import { transformToCodeWithMustache } from "./transform/transformToCodeWithMustache";
export declare const CodeGen: {
  transformToViewData: typeof getViewForSwagger2;
  transformToCodeWithMustache: typeof transformToCodeWithMustache;
  getTypescriptCode: (opts: ProvidedCodeGenOptions) => string;
  getCustomCode: (opts: ProvidedCodeGenOptions) => string;
  getDataAndOptionsForGeneration: (
    opts: ProvidedCodeGenOptions
  ) => {
    data: import("./getViewForSwagger2").ViewData;
    options: CodeGenOptions;
  };
};
//# sourceMappingURL=codegen.d.ts.map
