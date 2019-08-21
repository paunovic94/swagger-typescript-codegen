"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("../typescript");
const typespec_1 = require("../typespec");
function makeArrayTypeSpec(swaggerType, swagger) {
    const elementTypeSpec = typescript_1.convertType(swaggerType.items, swagger);
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { elementType: elementTypeSpec, tsType: `Array<${elementTypeSpec.target ||
            elementTypeSpec.tsType ||
            "any"}>`, isArray: true, isAtomic: false });
}
exports.makeArrayTypeSpec = makeArrayTypeSpec;
function isArray(swaggerType) {
    return swaggerType.type === "array";
}
exports.isArray = isArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHlwZS1tYXBwZXJzL2FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTRDO0FBQzVDLDBDQUFvRTtBQVdwRSxTQUFnQixpQkFBaUIsQ0FDL0IsV0FBeUIsRUFDekIsT0FBZ0I7SUFFaEIsTUFBTSxlQUFlLEdBQUcsd0JBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWhFLHlCQUNLLHNDQUEyQixDQUFDLFdBQVcsQ0FBQyxJQUMzQyxXQUFXLEVBQUUsZUFBZSxFQUM1QixNQUFNLEVBQUUsU0FBUyxlQUFlLENBQUMsTUFBTTtZQUNyQyxlQUFlLENBQUMsTUFBTTtZQUN0QixLQUFLLEdBQUcsRUFDVixPQUFPLEVBQUUsSUFBSSxFQUNiLFFBQVEsRUFBRSxLQUFLLElBQ2Y7QUFDSixDQUFDO0FBZkQsOENBZUM7QUFFRCxTQUFnQixPQUFPLENBQUMsV0FBd0I7SUFDOUMsT0FBTyxXQUFXLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztBQUN0QyxDQUFDO0FBRkQsMEJBRUMifQ==