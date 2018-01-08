"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function request(method, url, data) {
    return new Promise(function (fulfill, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener("error", function (e) {
            reject(e.error);
        });
        xhr.addEventListener("load", function (e) {
            fulfill(xhr);
        });
        xhr.send(data);
    });
}
exports.request = request;
async function get(url, data) {
    let xhr = await request("GET", url, data);
    return xhr.response;
}
exports.get = get;
async function getJson(url, data) {
    let xhr = await request("GET", url, data);
    if (typeof xhr.response === "string") {
        return JSON.parse(xhr.response);
    }
    return null;
}
exports.getJson = getJson;
async function post(url, data) {
    let xhr = await request("POST", url, data);
    return xhr.response;
}
exports.post = post;
async function postJson(url, data) {
    let response = await post(url, data);
    return JSON.parse(response);
}
exports.postJson = postJson;
