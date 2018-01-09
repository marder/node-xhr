"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function request(method, url, data, options) {
    return new Promise(function (fulfill, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener("error", function (e) {
            reject(e.error);
        });
        xhr.addEventListener("load", function (e) {
            fulfill(xhr);
        });
        if (options) {
            for (let key in options) {
                switch (key) {
                    case "headers":
                        if (typeof options[key] === "string")
                            xhr.setRequestHeader(key, options[key]);
                        break;
                    default:
                        xhr[key] = options[key];
                }
            }
        }
        xhr.send(data);
    });
}
exports.request = request;
async function get(url, data, options) {
    let xhr = await request("GET", url, data, options);
    return xhr.response;
}
exports.get = get;
async function getJson(url, data, options) {
    let response = await get(url, data, options);
    if (typeof response === "string") {
        return JSON.parse(response);
    }
    return null;
}
exports.getJson = getJson;
async function post(url, data, options) {
    let xhr = await request("POST", url, data, options);
    return xhr.response;
}
exports.post = post;
async function postJson(url, data, options) {
    let response = await post(url, data, options);
    return JSON.parse(response);
}
exports.postJson = postJson;
