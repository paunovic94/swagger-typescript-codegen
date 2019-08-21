import { Swagger, SwaggerType } from "./swagger/Swagger";
import { TypeSpec } from "./typespec";
/**
 * Recursively converts a swagger type description into a typescript type, i.e., a model for our mustache
 * template. By adding typescript type information.
 *
 * Not all type are currently supported, but they should be straightforward to add.
 *
 * @param swaggerType a swagger type definition, i.e., the right hand side of a swagger type definition.
 * @param swagger the full swagger spec object
 * @returns a recursive structure representing the type, which can be used as a template model.
 */
export declare function convertType(
  swaggerType: SwaggerType,
  swagger: Swagger
): TypeSpec;
/**
 * Recursively converts an Array of swagger type description into a typescript type,
 * i.e., a model for our mustache template. By adding typescript type information.
 *
 * @param {SwaggerType[]} swaggerTypes - An array of SwaggerTypes.
 * @param {Swagger} swagger - A Swagger schema.
 * @returns {TypeSpec[]} An array of TypeSpecs.
 */
export declare const convertTypes: (
  swaggerTypes: SwaggerType[],
  swagger: Swagger
) => TypeSpec[];
//# sourceMappingURL=typescript.d.ts.map
