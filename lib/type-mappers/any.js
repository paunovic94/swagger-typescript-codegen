"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
exports.isAnyTypeSpec = (swaggerType) => swaggerType.minItems >= 0 &&
    swaggerType.hasOwnProperty("title") &&
    !swaggerType.$ref;
function makeAnyTypeSpec(swaggerType) {
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: "any", isAtomic: true });
}
exports.makeAnyTypeSpec = makeAnyTypeSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGUtbWFwcGVycy9hbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBb0U7QUFRdkQsUUFBQSxhQUFhLEdBQUcsQ0FBQyxXQUF3QixFQUFXLEVBQUUsQ0FDakUsV0FBVyxDQUFDLFFBQVEsSUFBSSxDQUFDO0lBQ3pCLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztBQUVwQixTQUFnQixlQUFlLENBQUMsV0FBd0I7SUFDdEQseUJBQ0ssc0NBQTJCLENBQUMsV0FBVyxDQUFDLElBQzNDLE1BQU0sRUFBRSxLQUFLLEVBQ2IsUUFBUSxFQUFFLElBQUksSUFDZDtBQUNKLENBQUM7QUFORCwwQ0FNQyJ9