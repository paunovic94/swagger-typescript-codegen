"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const typescript_1 = require("../typescript");
function makeDefinitionsFromSwaggerDefinitions(swaggerDefinitions, swagger) {
    return lodash_1.map(lodash_1.entries(swaggerDefinitions), ([name, swaggerDefinition]) => ({
        name,
        description: swaggerDefinition.description,
        tsType: typescript_1.convertType(swaggerDefinition, swagger)
    }));
}
exports.makeDefinitionsFromSwaggerDefinitions = makeDefinitionsFromSwaggerDefinitions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LWRhdGEvZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFzQztBQUd0Qyw4Q0FBNEM7QUFRNUMsU0FBZ0IscUNBQXFDLENBQ25ELGtCQUFvRCxFQUNwRCxPQUFnQjtJQUVoQixPQUFPLFlBQUcsQ0FBQyxnQkFBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUk7UUFDSixXQUFXLEVBQUUsaUJBQWlCLENBQUMsV0FBVztRQUMxQyxNQUFNLEVBQUUsd0JBQVcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUM7S0FDaEQsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBVEQsc0ZBU0MifQ==