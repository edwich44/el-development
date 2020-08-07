// Routing Service Start
class RoutingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getView(url) {
        return this.httpClient.get(url);
    }
}


// Routing Service End