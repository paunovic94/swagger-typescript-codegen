"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beautify_1 = require("./beautify");
const beautified = `function helloWorld() {
    return 'hello world'
};`;
describe("beautify", () => {
    it("returns the beautified code when no beautify param was specified", () => {
        const code = `function helloWorld(){return'hello world'};`;
        expect(beautify_1.beautifyCode(undefined, code)).toBe(beautified);
    });
    it("returns the beautified code when true was specified", () => {
        const code = `function helloWorld(){return'hello world'};`;
        expect(beautify_1.beautifyCode(true, code)).toBe(beautified);
    });
    it("returns the original code when false was specified", () => {
        const code = `function helloWorld(){return'hello world'};`;
        expect(beautify_1.beautifyCode(false, code)).toBe(code);
    });
    it("runs the function that was specified", () => {
        const code = `function helloWorld(){return'hello world'};`;
        const prettify = jest.fn();
        beautify_1.beautifyCode(prettify, code);
        expect(prettify).toBeCalledWith(code);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXRpZnkudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlL2JlYXV0aWZ5LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMEM7QUFFMUMsTUFBTSxVQUFVLEdBQUc7O0dBRWhCLENBQUM7QUFFSixRQUFRLENBQUMsVUFBVSxFQUFFLEdBQVMsRUFBRTtJQUM5QixFQUFFLENBQUMsa0VBQWtFLEVBQUUsR0FBRyxFQUFFO1FBQzFFLE1BQU0sSUFBSSxHQUFHLDZDQUE2QyxDQUFDO1FBRTNELE1BQU0sQ0FBQyx1QkFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxHQUFHLEVBQUU7UUFDN0QsTUFBTSxJQUFJLEdBQUcsNkNBQTZDLENBQUM7UUFFM0QsTUFBTSxDQUFDLHVCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9EQUFvRCxFQUFFLEdBQUcsRUFBRTtRQUM1RCxNQUFNLElBQUksR0FBRyw2Q0FBNkMsQ0FBQztRQUUzRCxNQUFNLENBQUMsdUJBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxFQUFFO1FBQzlDLE1BQU0sSUFBSSxHQUFHLDZDQUE2QyxDQUFDO1FBQzNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQix1QkFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3QixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==