"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mustache = require("mustache");
const path = require("path");
const fs_1 = require("fs");
const transformToCodeWithMustache_1 = require("./transformToCodeWithMustache");
describe("transformToCodeWithMustache", () => {
    let viewData;
    let templates;
    beforeAll(() => {
        jest.spyOn(Mustache, "render");
        templates = {
            class: fs_1.readFileSync(path.join(transformToCodeWithMustache_1.DEFAULT_TEMPLATE_PATH, "class.mustache"), "utf-8"),
            method: fs_1.readFileSync(path.join(transformToCodeWithMustache_1.DEFAULT_TEMPLATE_PATH, "method.mustache"), "utf-8"),
            type: fs_1.readFileSync(path.join(transformToCodeWithMustache_1.DEFAULT_TEMPLATE_PATH, "type.mustache"), "utf-8")
        };
    });
    beforeEach(() => {
        viewData = {
            isES6: false,
            description: "",
            isSecure: false,
            isSecureToken: false,
            isSecureApiKey: false,
            isSecureBasic: false,
            moduleName: "",
            className: "",
            imports: [],
            domain: "",
            methods: [],
            definitions: []
        };
        Mustache.render.mockReset();
    });
    it("calls Mustache.render with the default templates for the typescript target", () => {
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, {});
        expect(Mustache.render).toBeCalledWith(templates.class, viewData, templates);
    });
    it("calls Mustache.render with the partially specified class template when it is provided", () => {
        const expectedTemplates = {
            class: "This is my custom template",
            method: templates.method,
            type: templates.type
        };
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, {
            class: "This is my custom template"
        });
        expect(Mustache.render).toBeCalledWith(expectedTemplates.class, viewData, expectedTemplates);
    });
    it("calls Mustache.render with the partially specified method template when it is provided", () => {
        const expectedTemplates = {
            class: templates.class,
            method: "function <methodName>() {}",
            type: templates.type
        };
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, {
            method: "function <methodName>() {}"
        });
        expect(Mustache.render).toBeCalledWith(templates.class, viewData, expectedTemplates);
    });
    it("calls Mustache.render with the partially specified type template when it is provided", () => {
        const expectedTemplates = {
            class: templates.class,
            method: templates.method,
            type: "type <typeName>"
        };
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, { type: "type <typeName>" });
        expect(Mustache.render).toBeCalledWith(templates.class, viewData, expectedTemplates);
    });
    it("uses the provided templates for the custom target", () => {
        const customTemplates = {
            class: "class <className> {<classContent>}",
            method: "function <methodName>() {}",
            type: "type <typeName>"
        };
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, customTemplates);
        expect(Mustache.render).toBeCalledWith(customTemplates.class, viewData, customTemplates);
    });
    it("adds passed mustache options to the viewData when calling render", () => {
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, {}, { name: "MyCustomName" });
        expect(Mustache.render.mock.calls[0][1].name).toBe("MyCustomName");
    });
    it("overrides the escape method with the identity function", () => {
        transformToCodeWithMustache_1.transformToCodeWithMustache(viewData, {}, { name: "MyCustomName" }, Mustache);
        expect(Mustache.escape("<div>")).toBe("<div>");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtVG9Db2RlV2l0aE11c3RhY2hlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNmb3JtL3RyYW5zZm9ybVRvQ29kZVdpdGhNdXN0YWNoZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLDZCQUE2QjtBQUM3QiwyQkFBa0M7QUFDbEMsK0VBSXVDO0FBR3ZDLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7SUFDakQsSUFBSSxRQUFrQixDQUFDO0lBQ3ZCLElBQUksU0FBb0IsQ0FBQztJQUV6QixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0IsU0FBUyxHQUFHO1lBQ1YsS0FBSyxFQUFFLGlCQUFZLENBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsbURBQXFCLEVBQUUsZ0JBQWdCLENBQUMsRUFDbEQsT0FBTyxDQUNSO1lBQ0QsTUFBTSxFQUFFLGlCQUFZLENBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsbURBQXFCLEVBQUUsaUJBQWlCLENBQUMsRUFDbkQsT0FBTyxDQUNSO1lBQ0QsSUFBSSxFQUFFLGlCQUFZLENBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsbURBQXFCLEVBQUUsZUFBZSxDQUFDLEVBQ2pELE9BQU8sQ0FDUjtTQUNGLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLEdBQUc7WUFDVCxLQUFLLEVBQUUsS0FBSztZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixhQUFhLEVBQUUsS0FBSztZQUNwQixjQUFjLEVBQUUsS0FBSztZQUNyQixhQUFhLEVBQUUsS0FBSztZQUNwQixVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFF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