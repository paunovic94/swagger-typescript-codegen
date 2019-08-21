"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("./codegen");
describe("CodeGen", () => {
    let swagger = {
        swagger: "2.0"
    };
    describe("getTypescriptCode", () => {
        it("throws when the swagger version is not 2.0", () => {
            swagger = Object.assign({}, swagger, { swagger: "3.0" });
            expect(() => codegen_1.CodeGen.getTypescriptCode({ swagger })).toThrow("Only Swagger 2 specs are supported");
        });
    });
    describe("getCustomCode", () => {
        it("throws when the swagger version is not 2.0", () => {
            const customTemplates = {
                class: "class <className> {<classContent>}",
                method: "function <methodName>() {<methodContent}}"
            };
            swagger = Object.assign({}, swagger, { swagger: "3.0" });
            expect(() => codegen_1.CodeGen.getCustomCode({ swagger, template: customTemplates })).toThrow("Only Swagger 2 specs are supported");
        });
        it("throws when the template option is not provided", () => {
            const customTemplates = undefined;
            expect(() => codegen_1.CodeGen.getCustomCode({ swagger, template: customTemplates })).toThrow('Unprovided custom template. Please use the following template: template: { class: "...", method: "...", request: "..." }');
        });
        it("throws when the class template is not provided", () => {
            const customTemplates = {
                method: "function <methodName>() {}",
                type: "type <typeName>"
            };
            expect(() => codegen_1.CodeGen.getCustomCode({ swagger, template: customTemplates })).toThrow('Unprovided custom template. Please use the following template: template: { class: "...", method: "...", request: "..." }');
        });
        it("throws when the method template is not provided", () => {
            const customTemplates = {
                class: "class <className> {<classContent>}",
                type: "type <typeName>"
            };
            expect(() => codegen_1.CodeGen.getCustomCode({ swagger, template: customTemplates })).toThrow('Unprovided custom template. Please use the following template: template: { class: "...", method: "...", request: "..." }');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWdlbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvZGVnZW4udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFvQztBQUlwQyxRQUFRLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtJQUN2QixJQUFJLE9BQU8sR0FBRztRQUNaLE9BQU8sRUFBRSxLQUFLO0tBQ0osQ0FBQztJQUViLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDakMsRUFBRSxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsRUFBRTtZQUNwRCxPQUFPLHFCQUNGLE9BQU8sSUFDVixPQUFPLEVBQUUsS0FBSyxHQUNmLENBQUM7WUFFRixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQzFELG9DQUFvQyxDQUNyQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQzdCLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLEVBQUU7WUFDcEQsTUFBTSxlQUFlLEdBQUc7Z0JBQ3RCLEtBQUssRUFBRSxvQ0FBb0M7Z0JBQzNDLE1BQU0sRUFBRSwyQ0FBMkM7YUFDcEQsQ0FBQztZQUVGLE9BQU8scUJBQ0YsT0FBTyxJQUNWLE9BQU8sRUFBRSxLQUFLLEdBQ2YsQ0FBQztZQUVGLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FDVixpQkFBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FDOUQsQ0FBQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxpREFBaUQsRUFBRSxHQUFHLEVBQUU7WUFDekQsTUFBTSxlQUFlLEdBQUksU0FBOEIsQ0FBQztZQUV4RCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQ1YsaUJBQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQzlELENBQUMsT0FBTyxDQUNQLDBIQUEwSCxDQUMzSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxFQUFFO1lBQ3hELE1BQU0sZUFBZSxHQUFHO2dCQUN0QixNQUFNLEVBQUUsNEJBQTRCO2dCQUNwQyxJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCLENBQUM7WUFFRixNQUFNLENBQUMsR0FBRyxFQUFFLENBQ1YsaUJBQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQzlELENBQUMsT0FBTyxDQUNQLDBIQUEwSCxDQUMzSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsaURBQWlELEVBQUUsR0FBRyxFQUFFO1lBQ3pELE1BQU0sZUFBZSxHQUFHO2dCQUN0QixLQUFLLEVBQUUsb0NBQW9DO2dCQUMzQyxJQUFJLEVBQUUsaUJBQWlCO2FBQ3hCLENBQUM7WUFFRixNQUFNLENBQUMsR0FBRyxFQUFFLENBQ1YsaUJBQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQzlELENBQUMsT0FBTyxDQUNQLDBIQUEwSCxDQUMzSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=