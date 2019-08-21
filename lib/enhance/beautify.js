"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_beautify_1 = require("js-beautify");
const lodash_1 = require("lodash");
const DEFAULT_BEAUTIFY_OPTIONS = {
    indent_size: 4,
    max_preserve_newlines: 2
};
function beautifyCode(beautify, source, options = {}) {
    // Backwards compatible js_beautify
    if (beautify === undefined || beautify === true) {
        return js_beautify_1.js_beautify(source, lodash_1.defaults(options, DEFAULT_BEAUTIFY_OPTIONS));
    }
    // Run the beautify function if it has been provided
    if (typeof beautify === "function") {
        return beautify(source);
    }
    // Return original source if no beautify option was given
    return source;
}
exports.beautifyCode = beautifyCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXRpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW5oYW5jZS9iZWF1dGlmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyxtQ0FBa0M7QUFFbEMsTUFBTSx3QkFBd0IsR0FBc0I7SUFDbEQsV0FBVyxFQUFFLENBQUM7SUFDZCxxQkFBcUIsRUFBRSxDQUFDO0NBQ3pCLENBQUM7QUFNRixTQUFnQixZQUFZLENBQzFCLFFBQWtCLEVBQ2xCLE1BQWMsRUFDZCxVQUEyQixFQUFFO0lBRTdCLG1DQUFtQztJQUNuQyxJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtRQUMvQyxPQUFPLHlCQUFXLENBQUMsTUFBTSxFQUFFLGlCQUFRLENBQUMsT0FBTyxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztLQUN6RTtJQUVELG9EQUFvRDtJQUNwRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QjtJQUVELHlEQUF5RDtJQUN6RCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBakJELG9DQWlCQyJ9