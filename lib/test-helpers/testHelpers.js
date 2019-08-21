"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function makeFakeSwagger() {
    return {};
}
exports.makeFakeSwagger = makeFakeSwagger;
function makeSwaggerType(overrides) {
    return lodash_1.merge({
        description: undefined,
        $ref: undefined,
        required: [],
        type: overrides.type,
        properties: {},
        allOf: undefined,
        minItems: 0
    }, overrides);
}
exports.makeSwaggerType = makeSwaggerType;
function makeEmptyTypeSpec() {
    return {
        name: undefined,
        description: undefined,
        isEnum: false,
        isArray: false,
        isObject: false,
        isRef: false,
        isNullable: false,
        isRequired: true,
        tsType: undefined,
        isAtomic: false,
        target: undefined,
        properties: undefined,
        hasAdditionalProperties: false,
        additionalPropertiesType: undefined
    };
}
exports.makeEmptyTypeSpec = makeEmptyTypeSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC1oZWxwZXJzL3Rlc3RIZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQStCO0FBVS9CLFNBQWdCLGVBQWU7SUFDN0IsT0FBTyxFQUFhLENBQUM7QUFDdkIsQ0FBQztBQUZELDBDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUM3QixTQUVpQztJQUVqQyxPQUFPLGNBQUssQ0FDVjtRQUNFLFdBQVcsRUFBRSxTQUFTO1FBQ3RCLElBQUksRUFBRSxTQUFTO1FBQ2YsUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7UUFDcEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxLQUFLLEVBQUUsU0FBUztRQUNoQixRQUFRLEVBQUUsQ0FBQztLQUNaLEVBQ0QsU0FBUyxDQUNWLENBQUM7QUFDSixDQUFDO0FBakJELDBDQWlCQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixPQUFPO1FBQ0wsSUFBSSxFQUFFLFNBQVM7UUFDZixXQUFXLEVBQUUsU0FBUztRQUN0QixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsS0FBSztRQUNaLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLFNBQVM7UUFDckIsdUJBQXVCLEVBQUUsS0FBSztRQUM5Qix3QkFBd0IsRUFBRSxTQUFTO0tBQ3BDLENBQUM7QUFDSixDQUFDO0FBakJELDhDQWlCQyJ9