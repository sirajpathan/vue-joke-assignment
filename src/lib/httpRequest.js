const request = function (url, options) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Accept": "text/plain"
        }
    };
    return fetch(url, Object.assign(requestOptions, options))
        .then(response => response.text(response));
}

export default request;