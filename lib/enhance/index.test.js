"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const beautify_1 = require("./beautify");
jest.mock("./beautify");
describe("enhanceCode", () => {
    it("calls beautify with the correct arguments", () => {
        const code = `function helloWorld(){return'hello world'};`;
        _1.enhanceCode(code, { beautify: undefined, beautifyOptions: {} });
        expect(beautify_1.beautifyCode).toBeCalledWith(undefined, code, {});
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmhhbmNlL2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBaUM7QUFDakMseUNBQTBDO0FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFeEIsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsRUFBRSxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsRUFBRTtRQUNuRCxNQUFNLElBQUksR0FBRyw2Q0FBNkMsQ0FBQztRQUUzRCxjQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVoRSxNQUFNLENBQUMsdUJBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==