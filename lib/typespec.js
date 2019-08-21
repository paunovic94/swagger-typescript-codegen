"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeTypeSpecFromSwaggerType(swaggerType) {
    return {
        name: undefined,
        description: swaggerType.description,
        isEnum: false,
        isArray: false,
        isObject: false,
        isRef: false,
        isNullable: !swaggerType.required,
        isRequired: Boolean(swaggerType.required),
        tsType: undefined,
        isAtomic: false,
        target: undefined,
        properties: undefined,
        hasAdditionalProperties: false,
        additionalPropertiesType: undefined
    };
}
exports.makeTypeSpecFromSwaggerType = makeTypeSpecFromSwaggerType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFxQkEsU0FBZ0IsMkJBQTJCLENBQ3pDLFdBQXdCO0lBRXhCLE9BQU87UUFDTCxJQUFJLEVBQUUsU0FBUztRQUNmLFdBQVcsRUFBRSxXQUFXLENBQUMsV0FBVztRQUNwQyxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsS0FBSztRQUNaLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRO1FBQ2pDLFVBQVUsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxNQUFNLEVBQUUsU0FBUztRQUNqQixRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLHVCQUF1QixFQUFFLEtBQUs7UUFDOUIsd0JBQXdCLEVBQUUsU0FBUztLQUNwQyxDQUFDO0FBQ0osQ0FBQztBQW5CRCxrRUFtQkMifQ==