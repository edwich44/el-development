
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
        var xhttp = new XMLHttpRequest();
        this.xhr = xhttp;
    }

    get(url) {
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              return this.responseText;
            }
          };

        this.xhr.open("GET", url, true);
        this.xhr.send();
    }
}

// HttpClient End