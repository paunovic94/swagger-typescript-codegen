"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionRegEx = /\/api\/(v\d+)\//;
function getVersion(path) {
    const version = versionRegEx.exec(path);
    // TODO: This only supports versions until v9, v10 will return 1?
    return (version && version[1]) || "v0";
}
exports.getVersion = getVersion;
function getIntVersion(path) {
    return parseInt(getVersion(path).substr(1));
}
exports.getIntVersion = getIntVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3LWRhdGEvdmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sWUFBWSxHQUFHLGlCQUFpQixDQUFDO0FBRXZDLFNBQWdCLFVBQVUsQ0FBQyxJQUFZO0lBQ3JDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsaUVBQWlFO0lBQ2pFLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3pDLENBQUM7QUFKRCxnQ0FJQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRkQsc0NBRUMifQ==