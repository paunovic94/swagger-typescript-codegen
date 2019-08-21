"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typespec_1 = require("../typespec");
const lodash_1 = require("lodash");
const typescript_1 = require("../typescript");
const any_1 = require("./any");
// see: https://support.reprezen.com/support/solutions/articles/6000162892-support-for-additionalproperties-in-swagger-2-0-schemas
function extractAdditionalPropertiesType(swaggerType, swagger) {
    if (swaggerType.type !== "object") {
        return undefined;
    }
    if (swaggerType.additionalProperties === false) {
        return undefined;
    }
    if (swaggerType.additionalProperties === undefined ||
        swaggerType.additionalProperties === true) {
        // is there an easier way to make an "any" type?
        return any_1.makeAnyTypeSpec({
            type: "object",
            required: [],
            minItems: 0,
            title: "any",
            properties: {}
        });
    }
    return typescript_1.convertType(swaggerType.additionalProperties, swagger);
}
exports.extractAdditionalPropertiesType = extractAdditionalPropertiesType;
function makeObjectTypeSpec(swaggerType, swagger) {
    // TODO: We threat everything that reaches this point as an object but not the required properties? (Removing the check for object makes the tests fail)
    const requiredPropertyNames = swaggerType.type === "object" && lodash_1.isArray(swaggerType.required)
        ? swaggerType.required
        : [];
    // Some special handling is needed to support overlapping properties. The list of properties must be reversed to get the
    // overriding properties first. Only then can we filter out any duplicates. To get the original order back, the array
    // is reversed once more
    const allProperties = lodash_1.concat(getAllOfProperties(swaggerType, swagger), getObjectProperties(swaggerType, swagger, requiredPropertyNames));
    const uniqueProperties = lodash_1.uniqBy(lodash_1.reverse(allProperties), "name");
    const properties = lodash_1.reverse(uniqueProperties);
    const addPropsType = extractAdditionalPropertiesType(swaggerType, swagger);
    return Object.assign({}, typespec_1.makeTypeSpecFromSwaggerType(swaggerType), { tsType: "object", isObject: true, isAtomic: false, properties,
        requiredPropertyNames, hasAdditionalProperties: addPropsType !== undefined, additionalPropertiesType: addPropsType });
}
exports.makeObjectTypeSpec = makeObjectTypeSpec;
function getObjectProperties(swaggerType, swagger, requiredPropertyNames) {
    return lodash_1.map(swaggerType.properties, (propertyType, propertyName) => (Object.assign({}, typescript_1.convertType(propertyType, swagger), { name: propertyName, isRequired: lodash_1.includes(requiredPropertyNames, propertyName) })));
}
function getAllOfProperties(swaggerType, swagger) {
    if (!swaggerType.allOf) {
        return [];
    }
    return lodash_1.flatten(lodash_1.map(swaggerType.allOf, ref => {
        if (!ref.$ref) {
            const property = typescript_1.convertType(ref, swagger);
            return lodash_1.filter(property.properties);
        }
        const refSegments = ref.$ref.split("/");
        const name = refSegments[refSegments.length - 1];
        return lodash_1.flatten(lodash_1.filter(lodash_1.map(lodash_1.filter(swagger.definitions, (__, definitionName) => definitionName === name), definition => {
            const property = typescript_1.convertType(definition, swagger);
            return property.properties;
        }), lodash_1.isArray));
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3R5cGUtbWFwcGVycy9vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBb0U7QUFDcEUsbUNBU2dCO0FBR2hCLDhDQUE0QztBQUM1QywrQkFBd0M7QUFZeEMsa0lBQWtJO0FBQ2xJLFNBQWdCLCtCQUErQixDQUM3QyxXQUF3QixFQUN4QixPQUFnQjtJQUVoQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ2pDLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsSUFBSSxXQUFXLENBQUMsb0JBQW9CLEtBQUssS0FBSyxFQUFFO1FBQzlDLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsSUFDRSxXQUFXLENBQUMsb0JBQW9CLEtBQUssU0FBUztRQUM5QyxXQUFXLENBQUMsb0JBQW9CLEtBQUssSUFBSSxFQUN6QztRQUNBLGdEQUFnRDtRQUNoRCxPQUFPLHFCQUFlLENBQUM7WUFDckIsSUFBSSxFQUFFLFFBQVE7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUMsQ0FBQztLQUNKO0lBQ0QsT0FBTyx3QkFBVyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoRSxDQUFDO0FBeEJELDBFQXdCQztBQUVELFNBQWdCLGtCQUFrQixDQUNoQyxXQUF3QixFQUN4QixPQUFnQjtJQUVoQix3SkFBd0o7SUFDeEosTUFBTSxxQkFBcUIsR0FDekIsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksZ0JBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzVELENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUTtRQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDO0lBRVQsd0hBQXdIO0lBQ3hILHFIQUFxSDtJQUNySCx3QkFBd0I7SUFDeEIsTUFBTSxhQUFhLEdBQUcsZUFBTSxDQUMxQixrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQ3hDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUscUJBQXFCLENBQUMsQ0FDakUsQ0FBQztJQUNGLE1BQU0sZ0JBQWdCLEdBQUcsZUFBTSxDQUFDLGdCQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEUsTUFBTSxVQUFVLEdBQUcsZ0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sWUFBWSxHQUFHLCtCQUErQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUzRSx5QkFDSyxzQ0FBMkIsQ0FBQyxXQUFXLENBQUMsSUFDM0MsTUFBTSxFQUFFLFFBQVEsRUFDaEIsUUFBUSxFQUFFLElBQUksRUFDZCxRQUFRLEVBQUUsS0FBSyxFQUNmLFVBQVU7UUFDVixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQUUsWUFBWSxLQUFLLFNBQVMsRUFDbkQsd0JBQXdCLEVBQUUsWUFBWSxJQUN0QztBQUNKLENBQUM7QUFoQ0QsZ0RBZ0NDO0FBRUQsU0FBUyxtQkFBbUIsQ0FDMUIsV0FBd0IsRUFDeEIsT0FBZ0IsRUFDaEIscUJBQTRDO0lBRTVDLE9BQU8sWUFBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxtQkFDOUQsd0JBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLElBQ3JDLElBQUksRUFBRSxZQUFZLEVBQ2xCLFVBQVUsRUFBRSxpQkFBUSxDQUFDLHFCQUFxQixFQUFFLFlBQVksQ0FBQyxJQUN6RCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FDekIsV0FBd0IsRUFDeEIsT0FBZ0I7SUFFaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7UUFDdEIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sZ0JBQU8sQ0FDWixZQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNiLE1BQU0sUUFBUSxHQUFHLHdCQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLE9BQU8sZUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztRQUVELE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpELE9BQU8sZ0JBQU8sQ0FDWixlQUFNLENBQ0osWUFBRyxDQUNELGVBQU0sQ0FDSixPQUFPLENBQUMsV0FBVyxFQUNuQixDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQ2hELEVBQ0QsVUFBVSxDQUFDLEVBQUU7WUFDWCxNQUFNLFFBQVEsR0FBRyx3QkFBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVsRCxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDN0IsQ0FBQyxDQUNGLEVBQ0QsZ0JBQU8sQ0FDUixDQUNGLENBQUM7SUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQyJ9