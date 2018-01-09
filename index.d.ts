export declare type RequestBodyLike = FormData | Object | string | undefined;
export interface XMLHttpRequestOptions {
    headers?: any;
    responseType?: XMLHttpRequestResponseType;
    onreadystatechange?: Function;
}
export declare function request(method: "GET" | "POST", url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<XMLHttpRequest>;
export declare function get(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any>;
export declare function getJson(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any>;
export declare function post(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any>;
export declare function postJson(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any>;
