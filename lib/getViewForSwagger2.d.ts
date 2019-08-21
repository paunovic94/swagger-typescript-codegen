import { CodeGenOptions } from "./options/options";
import { Method } from "./view-data/method";
import { Definition } from "./view-data/definition";
export declare type GenerationTargetType = "typescript" | "custom";
export interface ViewData {
  isES6: boolean;
  description: string;
  isSecure: boolean;
  moduleName: string;
  className: string;
  imports: ReadonlyArray<string>;
  domain: string;
  isSecureToken: boolean;
  isSecureApiKey: boolean;
  isSecureBasic: boolean;
  methods: Method[];
  definitions: Definition[];
}
export declare function getViewForSwagger2(opts: CodeGenOptions): ViewData;
//# sourceMappingURL=getViewForSwagger2.d.ts.map
