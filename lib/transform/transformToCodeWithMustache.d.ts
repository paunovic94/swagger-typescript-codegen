import { TemplateLocations } from "../options/options";
export declare const DEFAULT_TEMPLATE_PATH: string;
export declare type Templates = Record<keyof TemplateLocations, string>;
declare type Renderer = {
  readonly render: (
    template: string,
    view: any,
    partials?: any,
    tags?: string[]
  ) => string;
  escape?: (value: string) => string;
};
export declare function transformToCodeWithMustache<T, C extends {}>(
  data: T,
  templates: Partial<Templates>,
  additionalViewOptions?: Partial<C>,
  codeRenderer?: Renderer
): string;
export {};
//# sourceMappingURL=transformToCodeWithMustache.d.ts.map
