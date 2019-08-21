"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
const lodash_1 = require("lodash");
function makeReferenceTypeSpec(swaggerType) {
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { target: swaggerType.$ref.substring(swaggerType.$ref.lastIndexOf("/") + 1), tsType: "ref", isRef: true });
}
exports.makeReferenceTypeSpec = makeReferenceTypeSpec;
function isReference(swaggerType) {
    return lodash_1.isString(swaggerType.$ref);
}
exports.isReference = isReference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGUtbWFwcGVycy9yZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBb0U7QUFDcEUsbUNBQWtDO0FBU2xDLFNBQWdCLHFCQUFxQixDQUNuQyxXQUE2QjtJQUU3Qix5QkFDSyxzQ0FBMkIsQ0FBQyxXQUFXLENBQUMsSUFDM0MsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN6RSxNQUFNLEVBQUUsS0FBSyxFQUNiLEtBQUssRUFBRSxJQUFJLElBQ1g7QUFDSixDQUFDO0FBVEQsc0RBU0M7QUFFRCxTQUFnQixXQUFXLENBQ3pCLFdBQXdCO0lBRXhCLE9BQU8saUJBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUpELGtDQUlDIn0=