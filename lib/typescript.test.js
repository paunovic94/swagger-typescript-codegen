"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("./typescript");
const testHelpers_1 = require("./test-helpers/testHelpers");
describe("convertType", () => {
    let swagger;
    let swaggerType;
    let emptyTypeSpecWithDefaults;
    beforeEach(() => {
        swagger = testHelpers_1.makeFakeSwagger();
        emptyTypeSpecWithDefaults = testHelpers_1.makeEmptyTypeSpec();
    });
    describe("reference", () => {
        it("returns a reference object", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                $ref: "https://microsoft.com/api/users",
                type: "reference"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { target: "users", tsType: "ref", isRef: true }));
        });
    });
    describe("enum", () => {
        it("correctly converts an enum type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                enum: ["Marius", "Mark", "Mathieu"],
                type: "enum"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: '"Marius" | "Mark" | "Mathieu"', isAtomic: true, isEnum: true, enum: ["Marius", "Mark", "Mathieu"] }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "namesStartingWithM",
                required: true,
                enum: ["Marius", "Mark", "Mathieu"],
                type: "enum"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "namesStartingWithM", isRequired: true, isNullable: false, tsType: '"Marius" | "Mark" | "Mathieu"', isAtomic: true, isEnum: true, enum: ["Marius", "Mark", "Mathieu"] }));
        });
    });
    describe("string", () => {
        it("correctly converts an string type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({ type: "string" });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "string", isAtomic: true }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a string property",
                required: false,
                type: "string"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a string property", isRequired: false, isNullable: true, tsType: "string", isAtomic: true }));
        });
    });
    describe("number", () => {
        it("correctly converts an number type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({ type: "number" });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "number", isAtomic: true }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a number property",
                required: false,
                type: "number"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a number property", isRequired: false, isNullable: true, tsType: "number", isAtomic: true }));
        });
    });
    describe("boolean", () => {
        it("correctly converts an boolean type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({ type: "boolean" });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "boolean", isAtomic: true }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a boolean property",
                required: false,
                type: "boolean"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a boolean property", isRequired: false, isNullable: true, tsType: "boolean", isAtomic: true }));
        });
    });
    describe("array", () => {
        it("correctly converts an array type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "array",
                items: testHelpers_1.makeSwaggerType({ type: "number" })
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "Array<number>", isAtomic: false, isArray: true, elementType: Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "number", isAtomic: true }) }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a array property",
                required: false,
                type: "array",
                items: testHelpers_1.makeSwaggerType({
                    type: "object",
                    required: false,
                    additionalProperties: false
                })
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a array property", isRequired: false, isNullable: true, isArray: true, tsType: "Array<object>", isAtomic: false, elementType: Object.assign({}, emptyTypeSpecWithDefaults, { isRequired: false, isNullable: true, isObject: true, properties: [], tsType: "object", requiredPropertyNames: [] }) }));
        });
    });
    describe("dictionary", () => {
        it("correctly converts an dictionary type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                additionalProperties: testHelpers_1.makeSwaggerType({ type: "number" })
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: [], hasAdditionalProperties: true, additionalPropertiesType: Object.assign({}, emptyTypeSpecWithDefaults, { isAtomic: true, tsType: "number" }) }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a dictionary property",
                required: false,
                type: "object",
                additionalProperties: testHelpers_1.makeSwaggerType({ type: "number" })
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a dictionary property", tsType: "object", isAtomic: false, isObject: true, isNullable: true, isRequired: false, properties: [], requiredPropertyNames: [], hasAdditionalProperties: true, additionalPropertiesType: Object.assign({}, emptyTypeSpecWithDefaults, { isAtomic: true, tsType: "number" }) }));
        });
    });
    describe("any", () => {
        it("correctly converts an any type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                minItems: 10,
                title: "Een mooie titel"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "any", isAtomic: true }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a any property",
                required: false,
                type: "object",
                minItems: 10,
                title: "Een mooie titel"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a any property", isRequired: false, isNullable: true, tsType: "any", isAtomic: true }));
        });
    });
    describe("object", () => {
        it("correctly converts an object type", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: [] }));
        });
        it("correctly passes through typespec properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                description: "The description of a any property",
                required: false,
                type: "object"
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { description: "The description of a any property", isRequired: false, isNullable: true, tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: [], hasAdditionalProperties: true, additionalPropertiesType: Object.assign({}, emptyTypeSpecWithDefaults, { isAtomic: true, tsType: "any" }) }));
        });
        it("correctly converts an object type with properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                properties: {
                    age: testHelpers_1.makeSwaggerType({ type: "number" })
                },
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [
                    Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "number", isAtomic: true, name: "age", isRequired: false })
                ], requiredPropertyNames: [] }));
        });
        it("correctly converts an object type with additionalProperties: false", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: [] }));
        });
        it("correctly converts an object type with additionalProperties: true", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                additionalProperties: true
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: [], hasAdditionalProperties: true, additionalPropertiesType: Object.assign({}, emptyTypeSpecWithDefaults, { isAtomic: true, tsType: "any" }) }));
        });
        it("correctly converts an object type with a missing additionalProperties field", () => {
            // this needs to be treated exactly the same as with "additionalProperties = true"
            // see: https://support.reprezen.com/support/solutions/articles/6000162892-support-for-additionalproperties-in-swagger-2-0-schemas
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                additionalProperties: undefined
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: [], hasAdditionalProperties: true, additionalPropertiesType: Object.assign({}, emptyTypeSpecWithDefaults, { isAtomic: true, tsType: "any" }) }));
        });
        it("handles required properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                properties: {
                    age: testHelpers_1.makeSwaggerType({ type: "number" })
                },
                required: ["age"],
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [
                    Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "number", isAtomic: true, name: "age", isRequired: true })
                ], requiredPropertyNames: ["age"] }));
        });
        // TODO: This behaviour seems kind of weird? There is an object in an object but we seem flatten them in the resulting typedef?
        // TODO: It also seems weird that the requiredPropertiesNames does not take into account the flattening
        it("handles allOf properties of non $ref properties", () => {
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                allOf: [
                    testHelpers_1.makeSwaggerType({
                        type: "object",
                        properties: {
                            age: testHelpers_1.makeSwaggerType({ type: "number" })
                        },
                        additionalProperties: false
                    })
                ],
                required: ["age"],
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [
                    Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "number", isAtomic: true, name: "age", isRequired: false })
                ], requiredPropertyNames: ["age"] }));
        });
        it("handles allOf properties of $ref properties", () => {
            swagger = Object.assign({}, swagger, { definitions: {
                    person: testHelpers_1.makeSwaggerType({
                        type: "object",
                        properties: {
                            age: testHelpers_1.makeSwaggerType({ type: "number" })
                        },
                        additionalProperties: false
                    })
                } });
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                allOf: [
                    testHelpers_1.makeSwaggerType({
                        $ref: "api/person",
                        type: "reference"
                    })
                ],
                required: ["age"],
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [
                    Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "number", isAtomic: true, name: "age", isRequired: false })
                ], requiredPropertyNames: ["age"] }));
        });
        it("does not handle allOf properties of $ref properties that do not have a definition", () => {
            swagger = Object.assign({}, swagger, { definitions: {
                    person: testHelpers_1.makeSwaggerType({
                        type: "object",
                        properties: {
                            age: testHelpers_1.makeSwaggerType({ type: "number" })
                        },
                        additionalProperties: false
                    })
                } });
            swaggerType = testHelpers_1.makeSwaggerType({
                type: "object",
                allOf: [
                    testHelpers_1.makeSwaggerType({
                        $ref: "api/location",
                        type: "reference"
                    })
                ],
                required: ["age"],
                additionalProperties: false
            });
            expect(typescript_1.convertType(swaggerType, swagger)).toEqual(Object.assign({}, emptyTypeSpecWithDefaults, { tsType: "object", isAtomic: false, isObject: true, properties: [], requiredPropertyNames: ["age"] }));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3R5cGVzY3JpcHQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEyQztBQUMzQyw0REFJb0M7QUFLcEMsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxPQUFnQixDQUFDO0lBQ3JCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFJLHlCQUFtQyxDQUFDO0lBRXhDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUcsNkJBQWUsRUFBRSxDQUFDO1FBQzVCLHlCQUF5QixHQUFHLCtCQUFpQixFQUFFLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUN6QixFQUFFLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO1lBQ3BDLFdBQVcsR0FBRyw2QkFBZSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsaUNBQWlDO2dCQUN2QyxJQUFJLEVBQUUsV0FBVzthQUNsQixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsd0JBQVcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLG1CQUM1Qyx5QkFBeUIsSUFDNUIsTUFBTSxFQUFFLE9BQU8sRUFDZixNQUFNLEVBQUUsS0FBSyxFQUNiLEtBQUssRUFBRSxJQUFJLElBQ1gsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNwQixFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsR0FBRyw2QkFBZSxDQUFDO2dCQUM1QixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztnQkFDbkMsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUM7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