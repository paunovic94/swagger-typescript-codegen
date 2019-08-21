"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const cli = require("commander");
const codegen_1 = require("./codegen");
const pkg = require("../package.json");
cli
    .command("generate <file>")
    .description("Generate from Swagger file")
    .action((file) => {
    const result = codegen_1.CodeGen.getTypescriptCode({
        moduleName: "Test",
        className: "Test",
        swagger: JSON.parse(fs.readFileSync(file, "utf-8"))
    });
    console.log(result);
});
cli.version(pkg.version);
cli.parse(process.argv);
if (!cli.args.length) {
    cli.help();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFDakMsdUNBQW9DO0FBRXBDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRXZDLEdBQUc7S0FDQSxPQUFPLENBQUMsaUJBQWlCLENBQUM7S0FDMUIsV0FBVyxDQUFDLDRCQUE0QixDQUFDO0tBQ3pDLE1BQU0sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3ZCLE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDdkMsVUFBVSxFQUFFLE1BQU07UUFDbEIsU0FBUyxFQUFFLE1BQU07UUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDcEQsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVMLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXhCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUNwQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDWiJ9