"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHeadersForMethod(op, swagger) {
    const headers = [];
    const produces = op.produces || swagger.produces;
    if (produces) {
        headers.push({
            name: "Accept",
            value: `'${produces.join(", ")}'`
        });
    }
    const consumes = op.consumes || swagger.consumes;
    if (consumes) {
        const preferredContentType = consumes[0] || "";
        headers.push({ name: "Content-Type", value: `'${preferredContentType}'` });
    }
    return headers;
}
exports.getHeadersForMethod = getHeadersForMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LWRhdGEvaGVhZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLFNBQWdCLG1CQUFtQixDQUNqQyxFQUFpQixFQUNqQixPQUFnQjtJQUVoQixNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFDN0IsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRWpELElBQUksUUFBUSxFQUFFO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztTQUNsQyxDQUFDLENBQUM7S0FDSjtJQUVELE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNqRCxJQUFJLFFBQVEsRUFBRTtRQUNaLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUM1RTtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFyQkQsa0RBcUJDIn0=