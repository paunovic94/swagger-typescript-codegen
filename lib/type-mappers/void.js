"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
/**
 * Determines if a plain swagger schema SwaggerType should be annotated as a typescript VoidTypeSpec.
 *
 * 3.0 spec
 * To indicate the response body is empty, do not specify a content for the response
 * https://swagger.io/docs/specification/describing-responses/#empty
 *
 * 2.0 spec
 * To indicate the response body is empty, do not specify a schema for the response.
 * Swagger treats no schema as a response without a body.
 * https://swagger.io/docs/specification/2-0/describing-responses/
 *
 * @param {SwaggerType} swaggerType - The SwaggerType.
 * @returns {boolean} A boolean indicating that the SwaggerType should be annotated as a void typescript type.
 */
exports.isVoidType = (swaggerType) => swaggerType.type === undefined &&
    swaggerType.required === undefined &&
    swaggerType.$ref === undefined &&
    swaggerType.allOf === undefined &&
    swaggerType.minItems === undefined &&
    swaggerType.properties === undefined;
/**
 * Converts a plain swagger schema SwaggerType to an annotated typescript swagger VoidTypeSpec.
 * By adding void type typescript type annotations.
 *
 * @param {SwaggerType} swaggerType - A SwaggerType.
 * @returns {VoidTypeSpec} A VoidTypeSpec.
 */
exports.makeVoidTypeSpec = (swaggerType) => (Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: "void", isAtomic: true }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLW1hcHBlcnMvdm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFvRTtBQU9wRTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQUMsV0FBd0IsRUFBVyxFQUFFLENBQzdELFdBQVcsQ0FBQyxJQUEyQixLQUFLLFNBQVM7SUFDckQsV0FBVyxDQUFDLFFBQTJDLEtBQUssU0FBUztJQUN0RSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVM7SUFDOUIsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTO0lBQzlCLFdBQVcsQ0FBQyxRQUErQixLQUFLLFNBQVM7SUFDMUQsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUM7QUFFdkM7Ozs7OztHQU1HO0FBQ1UsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLFdBQXdCLEVBQWdCLEVBQUUsQ0FBQyxtQkFDdkUsc0NBQTJCLENBQUMsV0FBVyxDQUFDLElBQzNDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLElBQUksSUFDZCxDQUFDIn0=