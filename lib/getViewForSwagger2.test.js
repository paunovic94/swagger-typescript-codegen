"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options/options");
const getViewForSwagger2_1 = require("./getViewForSwagger2");
describe("getViewForSwagger2", () => {
    let swagger;
    beforeEach(() => {
        swagger = {
            swagger: "2.0",
            info: {
                description: "My cool Swagger schema"
            },
            host: "localhost:8080",
            schemes: ["https", "wss"],
            definitions: {},
            security: [],
            securityDefinitions: undefined,
            paths: {},
            basePath: "/api",
            produces: ["json"],
            consumes: ["json"],
            parameters: {}
        };
    });
    it("returns the default viewData for no additonal options", () => {
        const options = options_1.makeOptions({ swagger });
        expect(getViewForSwagger2_1.getViewForSwagger2(options)).toEqual(makeViewData());
    });
    it("adds imports from the options", () => {
        const options = options_1.makeOptions({
            swagger,
            imports: [`import * as _ from 'lodash'`]
        });
        expect(getViewForSwagger2_1.getViewForSwagger2(options)).toEqual(makeViewData({ imports: [`import * as _ from 'lodash'`] }));
    });
    it("can handle a single path", () => {
        const options = options_1.makeOptions({
            swagger: Object.assign({}, swagger, { paths: {
                    "/user": {}
                } })
        });
        expect(getViewForSwagger2_1.getViewForSwagger2(options)).toEqual(makeViewData({}));
    });
    describe("should honor includeDeprecated option", () => {
        let deprecatedSwagger;
        beforeEach(() => {
            deprecatedSwagger = Object.assign({}, swagger, { paths: {
                    "/deprecated": {
                        get: Object.assign({}, makeOperation(), { deprecated: true })
                    },
                    "/nonDeprecated": {
                        get: Object.assign({}, makeOperation(), { deprecated: false })
                    }
                } });
        });
        it("does not include deprecated methods by default", () => {
            const options = options_1.makeOptions({
                swagger: deprecatedSwagger
            });
            const view = getViewForSwagger2_1.getViewForSwagger2(options);
            expect(view.methods).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    path: "/nonDeprecated",
                    isDeprecated: false
                })
            ]));
        });
        it("includes deprecated methods if includeDeprecated is true", () => {
            const options = options_1.makeOptions({
                includeDeprecated: true,
                swagger: deprecatedSwagger
            });
            const view = getViewForSwagger2_1.getViewForSwagger2(options);
            expect(view.methods).toEqual(expect.arrayContaining([
                expect.objectContaining({ path: "/deprecated", isDeprecated: true }),
                expect.objectContaining({
                    path: "/nonDeprecated",
                    isDeprecated: false
                })
            ]));
        });
    });
});
function makeOperation() {
    return {
        security: false,
        responses: {},
        operationId: "operationId",
        description: "description",
        summary: "summary",
        externalDocs: "",
        produces: [""],
        consumes: [""],
        parameters: [],
        deprecated: false
    };
}
function makeViewData(partial = {}) {
    return Object.assign({ isES6: false, description: "My cool Swagger schema", isSecure: false, isSecureToken: false, isSecureApiKey: false, isSecureBasic: false, moduleName: "", className: "", imports: [], domain: "https://localhost:8080/api", methods: [], definitions: [] }, partial);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Vmlld0ZvclN3YWdnZXIyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0Vmlld0ZvclN3YWdnZXIyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBZ0Q7QUFFaEQsNkRBQW9FO0FBRXBFLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFDbEMsSUFBSSxPQUFnQixDQUFDO0lBRXJCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxPQUFPLEdBQUc7WUFDUixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsd0JBQXdCO2FBQ3RDO1lBQ0QsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQ3pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEVBQUU7WUFDWixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNsQixVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFHLEVBQUU7UUFDL0QsTUFBTSxPQUFPLEdBQUcscUJBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLHFCQUFXLENBQUM7WUFDMUIsT0FBTztZQUNQLE9BQU8sRUFBRSxDQUFD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