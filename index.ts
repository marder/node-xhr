
export type RequestBodyLike = FormData | Object | string | undefined;

export interface XMLHttpRequestOptions {
	
	headers?: any

	// Types
	responseType?: XMLHttpRequestResponseType

	// Callbacks
	onreadystatechange?: Function

}

export function request(method: "GET" | "POST", url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<XMLHttpRequest> {
	return new Promise(function (fulfill, reject) {

		let xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.addEventListener("error", function (e) {
			reject(e.error);
		});

		xhr.addEventListener("load", function (e) {
			fulfill(xhr);
		})

		if (options) {
			for (let key in options) {
				switch (key) {
					case "headers":
						if (typeof options[key] === "string")
							xhr.setRequestHeader(key, options[key] as string)
						break;
					default:
						xhr[key] = options[key];
				}
			}
		}

		xhr.send(data);
	});
}

export async function get(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any> {
	let xhr = await request("GET", url, data, options);
	return xhr.response;
}

export async function getJson(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions) {
	let response = await get(url, data, options);

	if (typeof response === "string") {
		return JSON.parse(response);
	}

	return null;
}

export async function post(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any> {
	let xhr = await request("POST", url, data, options);
	return xhr.response;
}
export async function postJson(url: string, data?: RequestBodyLike, options?: XMLHttpRequestOptions): Promise<any> {
	let response = await post(url, data, options);
	return JSON.parse(response);
}