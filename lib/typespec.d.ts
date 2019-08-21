import { SwaggerType } from "./swagger/Swagger";
declare type TsType = "string" | "number" | "boolean" | "ref";
export interface TypeSpec {
  readonly name: string | undefined;
  readonly description: string | undefined;
  readonly isEnum: boolean;
  readonly isArray: boolean;
  readonly isObject: boolean;
  readonly isRef: boolean;
  readonly isAtomic: boolean;
  readonly isNullable: boolean;
  readonly isRequired: boolean;
  readonly tsType: TsType | string | undefined;
  readonly target: string | undefined;
  readonly properties: ReadonlyArray<TypeSpec> | undefined;
  readonly hasAdditionalProperties: boolean;
  readonly additionalPropertiesType: TypeSpec | undefined;
}
export declare function makeTypeSpecFromSwaggerType(
  swaggerType: SwaggerType
): Readonly<TypeSpec>;
export {};
//# sourceMappingURL=typespec.d.ts.map
