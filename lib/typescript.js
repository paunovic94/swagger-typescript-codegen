"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./type-mappers/object");
const reference_1 = require("./type-mappers/reference");
const enum_1 = require("./type-mappers/enum");
const string_1 = require("./type-mappers/string");
const number_1 = require("./type-mappers/number");
const boolean_1 = require("./type-mappers/boolean");
const array_1 = require("./type-mappers/array");
const any_1 = require("./type-mappers/any");
const schema_1 = require("./type-mappers/schema");
const void_1 = require("./type-mappers/void");
/**
 * Recursively converts a swagger type description into a typescript type, i.e., a model for our mustache
 * template. By adding typescript type information.
 *
 * Not all type are currently supported, but they should be straightforward to add.
 *
 * @param swaggerType a swagger type definition, i.e., the right hand side of a swagger type definition.
 * @param swagger the full swagger spec object
 * @returns a recursive structure representing the type, which can be used as a template model.
 */
function convertType(swaggerType, swagger) {
    if (schema_1.isSchema(swaggerType)) {
        return convertType(swaggerType.schema, swagger);
    }
    else if (reference_1.isReference(swaggerType)) {
        return reference_1.makeReferenceTypeSpec(swaggerType);
    }
    else if (enum_1.isEnum(swaggerType)) {
        return enum_1.makeEnumTypeSpec(swaggerType);
    }
    else if (string_1.isString(swaggerType)) {
        return string_1.makeStringTypeSpec(swaggerType);
    }
    else if (number_1.isNumber(swaggerType)) {
        return number_1.makeNumberTypeSpec(swaggerType);
    }
    else if (boolean_1.isBoolean(swaggerType)) {
        return boolean_1.makeBooleanTypeSpec(swaggerType);
    }
    else if (array_1.isArray(swaggerType)) {
        return array_1.makeArrayTypeSpec(swaggerType, swagger);
    }
    else if (any_1.isAnyTypeSpec(swaggerType)) {
        return any_1.makeAnyTypeSpec(swaggerType);
    }
    else if (void_1.isVoidType(swaggerType)) {
        return void_1.makeVoidTypeSpec(swaggerType);
    }
    // Remaining types are created as objects
    return object_1.makeObjectTypeSpec(swaggerType, swagger);
}
exports.convertType = convertType;
/**
 * Recursively converts an Array of swagger type description into a typescript type,
 * i.e., a model for our mustache template. By adding typescript type information.
 *
 * @param {SwaggerType[]} swaggerTypes - An array of SwaggerTypes.
 * @param {Swagger} swagger - A Swagger schema.
 * @returns {TypeSpec[]} An array of TypeSpecs.
 */
exports.convertTypes = (swaggerTypes, swagger) => swaggerTypes.map(swaggerType => convertType(swaggerType, swagger));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0RBQTJEO0FBQzNELHdEQUE4RTtBQUM5RSw4Q0FBK0Q7QUFFL0Qsa0RBQXFFO0FBQ3JFLGtEQUFxRTtBQUNyRSxvREFBd0U7QUFDeEUsZ0RBQWtFO0FBQ2xFLDRDQUFvRTtBQUNwRSxrREFBaUQ7QUFDakQsOENBQW1FO0FBRW5FOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLFdBQVcsQ0FDekIsV0FBd0IsRUFDeEIsT0FBZ0I7SUFFaEIsSUFBSSxpQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDakQ7U0FBTSxJQUFJLHVCQUFXLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDbkMsT0FBTyxpQ0FBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMzQztTQUFNLElBQUksYUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQzlCLE9BQU8sdUJBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdEM7U0FBTSxJQUFJLGlCQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDaEMsT0FBTywyQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN4QztTQUFNLElBQUksaUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNoQyxPQUFPLDJCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3hDO1NBQU0sSUFBSSxtQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sNkJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDekM7U0FBTSxJQUFJLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMvQixPQUFPLHlCQUFpQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNoRDtTQUFNLElBQUksbUJBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNyQyxPQUFPLHFCQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDckM7U0FBTSxJQUFJLGlCQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDbEMsT0FBTyx1QkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN0QztJQUVELHlDQUF5QztJQUN6QyxPQUFPLDJCQUFrQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBMUJELGtDQTBCQztBQUVEOzs7Ozs7O0dBT0c7QUFDVSxRQUFBLFlBQVksR0FBRyxDQUMxQixZQUEyQixFQUMzQixPQUFnQixFQUNKLEVBQUUsQ0FDZCxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDIn0=