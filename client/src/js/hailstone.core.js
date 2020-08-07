
// HttpClient Start
class HttpClient {
    constructor() {
        this.request = new Request();
    }

    get(url) {
      return this.request.get(url);
    }
}

// Replace this with any XHR api you want
//TODO: Use a DI framework e.g. RequireJS to inject this into this class instead
class Request {
    constructor(){
    }

    get(url) {
        return this.makeRequest(url);
    }

    makeRequest(url) {
        return new Promise(function(resolve, reject) {      
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                  resolve(xhr.response);
                } else {
                  reject({
                    status: this.status,
                    statusText: xhr.statusText
                  });
                }
              };
            xhr.onerror = reject;
            xhr.send();
       });
    }
}

// HttpClient End