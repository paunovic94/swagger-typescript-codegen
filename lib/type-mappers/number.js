"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
function makeNumberTypeSpec(swaggerType) {
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: "number", isAtomic: true });
}
exports.makeNumberTypeSpec = makeNumberTypeSpec;
function isNumber(swaggerType) {
    return swaggerType.type === "number" || swaggerType.type === "integer";
}
exports.isNumber = isNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGUtbWFwcGVycy9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBb0U7QUFRcEUsU0FBZ0Isa0JBQWtCLENBQUMsV0FBMEI7SUFDM0QseUJBQ0ssc0NBQTJCLENBQUMsV0FBVyxDQUFDLElBQzNDLE1BQU0sRUFBRSxRQUFRLEVBQ2hCLFFBQVEsRUFBRSxJQUFJLElBQ2Q7QUFDSixDQUFDO0FBTkQsZ0RBTUM7QUFFRCxTQUFnQixRQUFRLENBQ3RCLFdBQXdCO0lBRXhCLE9BQU8sV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7QUFDekUsQ0FBQztBQUpELDRCQUlDIn0=