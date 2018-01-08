export declare type RequestBodyLike = FormData | Object | string | undefined;
export declare function request(method: "GET" | "POST", url: string, data?: RequestBodyLike): Promise<XMLHttpRequest>;
export declare function get(url: string, data?: RequestBodyLike): Promise<any>;
export declare function getJson(url: string, data?: RequestBodyLike): Promise<any>;
export declare function post(url: string, data?: RequestBodyLike): Promise<any>;
export declare function postJson(url: string, data?: RequestBodyLike): Promise<any>;
