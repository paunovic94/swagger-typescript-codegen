"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
function makeStringTypeSpec(swaggerType) {
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: "string", isAtomic: true });
}
exports.makeStringTypeSpec = makeStringTypeSpec;
function isString(swaggerType) {
    return swaggerType.type === "string";
}
exports.isString = isString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGUtbWFwcGVycy9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBb0U7QUFRcEUsU0FBZ0Isa0JBQWtCLENBQUMsV0FBMEI7SUFDM0QseUJBQ0ssc0NBQTJCLENBQUMsV0FBVyxDQUFDLElBQzNDLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLFFBQVEsRUFBRSxJQUFJLElBQ2Q7QUFDSixDQUFDO0FBTkQsZ0RBTUM7QUFFRCxTQUFnQixRQUFRLENBQ3RCLFdBQXdCO0lBRXhCLE9BQU8sV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7QUFDdkMsQ0FBQztBQUpELDRCQUlDIn0=