import { TypeSpec } from "../typespec";
import { SwaggerType } from "../swagger/Swagger";
export interface AnyTypeSpec extends TypeSpec {
  readonly tsType: "any";
  readonly isAtomic: true;
}
export declare const isAnyTypeSpec: (swaggerType: SwaggerType) => boolean;
export declare function makeAnyTypeSpec(swaggerType: SwaggerType): AnyTypeSpec;
//# sourceMappingURL=any.d.ts.map
