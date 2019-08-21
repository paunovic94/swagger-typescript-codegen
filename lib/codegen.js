"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const options_1 = require("./options/options");
const getViewForSwagger2_1 = require("./getViewForSwagger2");
const transformToCodeWithMustache_1 = require("./transform/transformToCodeWithMustache");
const enhance_1 = require("./enhance");
function getCode(opts) {
    verifyThatWeAreGeneratingForSwagger2(opts);
    const data = getViewForSwagger2_1.getViewForSwagger2(opts);
    return transformToCodeWithMustache_1.transformToCodeWithMustache(data, opts.template, opts.mustache);
}
exports.CodeGen = {
    transformToViewData: getViewForSwagger2_1.getViewForSwagger2,
    transformToCodeWithMustache: transformToCodeWithMustache_1.transformToCodeWithMustache,
    getTypescriptCode: function (opts) {
        const options = options_1.makeOptions(opts);
        return enhance_1.enhanceCode(getCode(options), options);
    },
    getCustomCode: function (opts) {
        verifyThatWeHaveRequiredTemplatesForCustomGenerationTarget(opts);
        const options = options_1.makeOptions(opts);
        return enhance_1.enhanceCode(getCode(options), options);
    },
    getDataAndOptionsForGeneration: function (opts) {
        const options = options_1.makeOptions(opts);
        verifyThatWeAreGeneratingForSwagger2(options);
        const data = getViewForSwagger2_1.getViewForSwagger2(options);
        return { data, options };
    }
};
function verifyThatWeHaveRequiredTemplatesForCustomGenerationTarget(opts) {
    // TODO: Why do we not check for the existence of the type template?
    if (!opts.template ||
        !lodash_1.isObject(opts.template) ||
        !lodash_1.isString(opts.template.class) ||
        !lodash_1.isString(opts.template.method)) {
        throw new Error('Unprovided custom template. Please use the following template: template: { class: "...", method: "...", request: "..." }');
    }
}
function verifyThatWeAreGeneratingForSwagger2(opts) {
    if (opts.swagger.swagger !== "2.0") {
        throw new Error("Only Swagger 2 specs are supported");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb2RlZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTRDO0FBQzVDLCtDQUkyQjtBQUMzQiw2REFBMEQ7QUFDMUQseUZBQXNGO0FBQ3RGLHVDQUF3QztBQUV4QyxTQUFTLE9BQU8sQ0FBQyxJQUFvQjtJQUNuQyxvQ0FBb0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUzQyxNQUFNLElBQUksR0FBRyx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxPQUFPLHlEQUEyQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRVksUUFBQSxPQUFPLEdBQUc7SUFDckIsbUJBQW1CLEVBQUUsdUNBQWtCO0lBQ3ZDLDJCQUEyQixFQUEzQix5REFBMkI7SUFDM0IsaUJBQWlCLEVBQUUsVUFBUyxJQUE0QjtRQUN0RCxNQUFNLE9BQU8sR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxDLE9BQU8scUJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELGFBQWEsRUFBRSxVQUFTLElBQTRCO1FBQ2xELDBEQUEwRCxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpFLE1BQU0sT0FBTyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEMsT0FBTyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsOEJBQThCLEVBQUUsVUFBUyxJQUE0QjtRQUNuRSxNQUFNLE9BQU8sR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLG9DQUFvQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sSUFBSSxHQUFHLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNGLENBQUM7QUFFRixTQUFTLDBEQUEwRCxDQUNqRSxJQUE0QjtJQUU1QixvRUFBb0U7SUFDcEUsSUFDRSxDQUFDLElBQUksQ0FBQyxRQUFRO1FBQ2QsQ0FBQyxpQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsQ0FBQyxpQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzlCLENBQUMsaUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUMvQjtRQUNBLE1BQU0sSUFBSSxLQUFLLENBQ2IsMEhBQTBILENBQzNILENBQUM7S0FDSDtBQUNILENBQUM7QUFFRCxTQUFTLG9DQUFvQyxDQUFDLElBQW9CO0lBQ2hFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztLQUN2RDtBQUNILENBQUMifQ==