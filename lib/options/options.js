"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mustache = require("mustache");
const DEFAULT_OPTIONS = {
    isES6: false,
    moduleName: "",
    includeDeprecated: false,
    imports: [],
    className: "",
    template: {},
    mustache: Mustache,
    beautify: true,
    beautifyOptions: {}
};
function makeOptions(options) {
    return Object.assign({}, DEFAULT_OPTIONS, options);
}
exports.makeOptions = makeOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUF5QnJDLE1BQU0sZUFBZSxHQUFZO0lBQy9CLEtBQUssRUFBRSxLQUFLO0lBQ1osVUFBVSxFQUFFLEVBQUU7SUFDZCxpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLEVBQUU7SUFDYixRQUFRLEVBQUUsRUFBRTtJQUNaLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQVNGLFNBQWdCLFdBQVcsQ0FBQyxPQUErQjtJQUN6RCx5QkFDSyxlQUFlLEVBQ2YsT0FBTyxFQUNWO0FBQ0osQ0FBQztBQUxELGtDQUtDIn0=