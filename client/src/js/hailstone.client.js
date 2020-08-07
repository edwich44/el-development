// Client Start
class HailStone {
    constructor() {
    }

    getViews() {
        return getViews();
    }
}


// Client End

//Routing Start
function getViews() {
    var getViewElms = document.querySelectorAll('[data-hailstone-routing-view]');
    
    if(getViewElms || getViewElms.length == 0){
        return;
    }

    var routingService = new RoutingService(new HttpClient());

    for(x = 0; getViewElms.length > x; x++){
      var getViewElm =  getViewElms[x];
      var url = getViewElm.getAttribute("data-hailstone-routing-view");

      getViewElm.innerHTML = routingService.getView(url);
    }
}

//Routing End