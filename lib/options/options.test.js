"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
const Mustache = require("mustache");
const defaultOptions = {
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
describe("makeOptions", () => {
    it("returns the default options when no options are passed", () => {
        const partialOptions = {
            swagger: {}
        };
        expect(options_1.makeOptions(partialOptions)).toEqual(Object.assign({}, defaultOptions, { swagger: {} }));
    });
    it("merges in the options that are passed with higher priority", () => {
        const partialOptions = {
            swagger: {},
            className: "GeneratedDataLayer"
        };
        const options = options_1.makeOptions(partialOptions);
        expect(options.className).toBe("GeneratedDataLayer");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29wdGlvbnMvb3B0aW9ucy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdDO0FBQ3hDLHFDQUFxQztBQUdyQyxNQUFNLGNBQWMsR0FBRztJQUNyQixLQUFLLEVBQUUsS0FBSztJQUNaLFVBQVUsRUFBRSxFQUFFO0lBQ2QsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixPQUFPLEVBQUUsRUFBRTtJQUNYLFNBQVMsRUFBRSxFQUFFO0lBQ2IsUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsSUFBSTtJQUNkLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUMzQixFQUFFLENBQUMsd0RBQXdELEVBQUUsR0FBRyxFQUFFO1FBQ2hFLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLE9BQU8sRUFBRSxFQUFhO1NBQ3ZCLENBQUM7UUFFRixNQUFNLENBQUMscUJBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sbUJBQ3RDLGNBQWMsSUFDakIsT0FBTyxFQUFFLEVBQUUsSUFDWCxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNERBQTRELEVBQUUsR0FBRyxFQUFFO1FBQ3BFLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLE9BQU8sRUFBRSxFQUFhO1lBQ3RCLFNBQVMsRUFBRSxvQkFBb0I7U0FDaEMsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLHFCQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=