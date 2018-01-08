
export type RequestBodyLike = FormData | Object | string | undefined;

export function request(method: "GET" | "POST", url: string, data?: RequestBodyLike): Promise<XMLHttpRequest> {
    return new Promise(function (fulfill, reject) {
        
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.addEventListener("error", function (e) {
            reject(e.error);
        });

        xhr.addEventListener("load", function (e) {
            fulfill(xhr);
        })

        xhr.send(data);
    });
}

export async function get(url: string, data?: RequestBodyLike): Promise<any> {
    let xhr = await request("GET", url, data);
    return xhr.response;
}

export async function getJson(url: string, data?: RequestBodyLike) {
    let xhr = await request("GET", url, data);

    if (typeof xhr.response === "string") {
        return JSON.parse(xhr.response);
    }

    return null;
}

export async function post(url: string, data?: RequestBodyLike): Promise<any> {
    let xhr = await request("POST", url, data);
    return xhr.response;
}
export async function postJson(url: string, data?: RequestBodyLike): Promise<any> {
    let response = await post(url, data);
    return JSON.parse(response);
}