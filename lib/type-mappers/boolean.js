"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
function makeBooleanTypeSpec(swaggerType) {
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: "boolean", isAtomic: true });
}
exports.makeBooleanTypeSpec = makeBooleanTypeSpec;
function isBoolean(swaggerType) {
    return swaggerType.type === "boolean";
}
exports.isBoolean = isBoolean;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLW1hcHBlcnMvYm9vbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFvRTtBQVFwRSxTQUFnQixtQkFBbUIsQ0FDakMsV0FBMkI7SUFFM0IseUJBQ0ssc0NBQTJCLENBQUMsV0FBVyxDQUFDLElBQzNDLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLFFBQVEsRUFBRSxJQUFJLElBQ2Q7QUFDSixDQUFDO0FBUkQsa0RBUUM7QUFFRCxTQUFnQixTQUFTLENBQ3ZCLFdBQXdCO0lBRXhCLE9BQU8sV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7QUFDeEMsQ0FBQztBQUpELDhCQUlDIn0=