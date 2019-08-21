"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
function makeEnumTypeSpec(swaggerType) {
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: swaggerType.enum.map(str => JSON.stringify(str)).join(" | "), enum: swaggerType.enum, isEnum: true, isAtomic: true });
}
exports.makeEnumTypeSpec = makeEnumTypeSpec;
function isEnum(swaggerType) {
    return Boolean(swaggerType.hasOwnProperty("enum") && swaggerType.enum);
}
exports.isEnum = isEnum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLW1hcHBlcnMvZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFvRTtBQVVwRSxTQUFnQixnQkFBZ0IsQ0FBQyxXQUF3QjtJQUN2RCx5QkFDSyxzQ0FBMkIsQ0FBQyxXQUFXLENBQUMsSUFDM0MsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDcEUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQ3RCLE1BQU0sRUFBRSxJQUFJLEVBQ1osUUFBUSxFQUFFLElBQUksSUFDZDtBQUNKLENBQUM7QUFSRCw0Q0FRQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxXQUF3QjtJQUM3QyxPQUFPLE9BQU8sQ0FDWixXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFLLFdBQThCLENBQUMsSUFBSSxDQUMzRSxDQUFDO0FBQ0osQ0FBQztBQUpELHdCQUlDIn0=