"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Mustache = require("mustache");
const lodash_1 = require("lodash");
const path_1 = require("path");
exports.DEFAULT_TEMPLATE_PATH = path_1.join(__dirname, "..", "..", "templates");
function transformToCodeWithMustache(data, templates, additionalViewOptions = {}, codeRenderer = Mustache) {
    // Ensure we don't encode special characters
    codeRenderer.escape = lodash_1.identity;
    const loadedTemplates = loadTemplates(templates);
    return codeRenderer.render(loadedTemplates.class, lodash_1.assign(data, additionalViewOptions), loadedTemplates);
}
exports.transformToCodeWithMustache = transformToCodeWithMustache;
function loadTemplates(templateLocations = {}) {
    return {
        class: templateLocations.class ||
            fs_1.readFileSync(path_1.join(exports.DEFAULT_TEMPLATE_PATH, "class.mustache"), "utf-8"),
        method: templateLocations.method ||
            fs_1.readFileSync(path_1.join(exports.DEFAULT_TEMPLATE_PATH, "method.mustache"), "utf-8"),
        type: templateLocations.type ||
            fs_1.readFileSync(path_1.join(exports.DEFAULT_TEMPLATE_PATH, "type.mustache"), "utf-8")
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtVG9Db2RlV2l0aE11c3RhY2hlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zZm9ybS90cmFuc2Zvcm1Ub0NvZGVXaXRoTXVzdGFjaGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBa0M7QUFDbEMscUNBQXFDO0FBRXJDLG1DQUEwQztBQUUxQywrQkFBNEI7QUFFZixRQUFBLHFCQUFxQixHQUFHLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQWM5RSxTQUFnQiwyQkFBMkIsQ0FDekMsSUFBTyxFQUNQLFNBQTZCLEVBQzdCLHdCQUFvQyxFQUFFLEVBQ3RDLGVBQXlCLFFBQVE7SUFFakMsNENBQTRDO0lBQzVDLFlBQVksQ0FBQyxNQUFNLEdBQUcsaUJBQVEsQ0FBQztJQUUvQixNQUFNLGVBQWUsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFakQsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUN4QixlQUFlLENBQUMsS0FBSyxFQUNyQixlQUFNLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLEVBQ25DLGVBQWUsQ0FDaEIsQ0FBQztBQUNKLENBQUM7QUFoQkQsa0VBZ0JDO0FBRUQsU0FBUyxhQUFhLENBQUMsb0JBQXdDLEVBQUU7SUFDL0QsT0FBTztRQUNMLEtBQUssRUFDSCxpQkFBaUIsQ0FBQyxLQUFLO1lBQ3ZCLGlCQUFZLENBQUMsV0FBSSxDQUFDLDZCQUFxQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxDQUFDO1FBQ3RFLE1BQU0sRUFDSixpQkFBaUIsQ0FBQyxNQUFNO1lBQ3hCLGlCQUFZLENBQUMsV0FBSSxDQUFDLDZCQUFxQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxDQUFDO1FBQ3ZFLElBQUksRUFDRixpQkFBaUIsQ0FBQyxJQUFJO1lBQ3RCLGlCQUFZLENBQUMsV0FBSSxDQUFDLDZCQUFxQixFQUFFLGVBQWUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztLQUN0RSxDQUFDO0FBQ0osQ0FBQyJ9