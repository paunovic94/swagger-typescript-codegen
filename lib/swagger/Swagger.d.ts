declare type SwaggerTypes =
  | "object"
  | "string"
  | "boolean"
  | "number"
  | "integer"
  | "array"
  | "enum"
  | "schema"
  | "reference";
export interface SwaggerType {
  readonly description?: string;
  readonly required: boolean | ReadonlyArray<string>;
  readonly type: SwaggerTypes;
  readonly allOf?: ReadonlyArray<SwaggerType>;
  readonly minItems: number;
  readonly title?: string;
  readonly $ref?: string;
  readonly properties: {
    readonly [index: string]: SwaggerType;
  };
  readonly additionalProperties?: boolean | SwaggerType;
}
export interface SwaggerArray extends SwaggerType {
  readonly type: "array";
  readonly items: SwaggerType;
}
export interface SwaggerDictionary extends SwaggerType {
  readonly additionalProperties: SwaggerType;
}
export interface SwaggerBoolean extends SwaggerType {
  readonly type: "boolean";
}
export interface SwaggerString extends SwaggerType {
  readonly type: "string";
}
export interface SwaggerNumber extends SwaggerType {
  readonly type: "number" | "integer";
}
export interface SwaggerReference extends SwaggerType {
  readonly type: "reference";
  readonly $ref: string;
}
export interface SwaggerSchema extends SwaggerType {
  readonly schema: SwaggerType;
}
export interface SwaggerEnum extends SwaggerType {
  readonly type: "enum";
  readonly enum: ReadonlyArray<string>;
}
export interface Parameter extends SwaggerType {
  readonly name: string;
  readonly camelCaseName: string;
  readonly "x-exclude-from-bindings"?: boolean;
  readonly "x-proxy-header"?: string;
  readonly "x-name-pattern"?: string;
  readonly $ref: string;
  readonly enum: ReadonlyArray<any>;
  readonly isSingleton: boolean;
  readonly singleton: any;
  readonly in: "body" | "query" | "header" | "formData" | "path";
  readonly required: boolean;
}
export interface Scheme {}
export interface Security {}
export interface SecurityDefinition {
  readonly type: any;
}
export interface HttpOperation {
  readonly deprecated: boolean;
  readonly security: boolean;
  readonly responses: {
    readonly [index: string]: SwaggerType;
  };
  readonly operationId: string;
  readonly description: string;
  readonly summary: string;
  readonly externalDocs: string;
  readonly produces: ReadonlyArray<string>;
  readonly consumes: ReadonlyArray<string>;
  readonly parameters: ReadonlyArray<Parameter>;
}
export declare type HttpMethod =
  | "get"
  | "put"
  | "post"
  | "delete"
  | "options"
  | "head"
  | "patch";
export declare const schemaAllowedHttpMethods: HttpMethod[];
export declare type PathItemObject = {
  readonly [op in HttpMethod]?: HttpOperation
} & {
  readonly parameters?: ReadonlyArray<Parameter>;
};
export declare type PathsObject = {
  readonly [index: string]: PathItemObject;
};
export interface Swagger {
  readonly swagger: string;
  readonly security: ReadonlyArray<Security>;
  readonly securityDefinitions:
    | {
        [index: string]: SecurityDefinition;
      }
    | undefined;
  readonly schemes: ReadonlyArray<Scheme>;
  readonly host: string;
  readonly basePath: string;
  readonly info: {
    readonly description: string;
  };
  readonly paths: PathsObject;
  readonly definitions: {
    readonly [index: string]: SwaggerType;
  };
  readonly parameters: {
    readonly [index: string]: Parameter;
  };
  readonly produces: ReadonlyArray<string>;
  readonly consumes: ReadonlyArray<string>;
}
export declare type PathsObjectEntries = [string, PathItemObject];
export declare type PathAndMethodTupleWithPathParams = [
  string,
  HttpMethod,
  HttpOperation,
  ReadonlyArray<Parameter>
];
export {};
//# sourceMappingURL=Swagger.d.ts.map
