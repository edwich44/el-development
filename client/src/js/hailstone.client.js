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
    
    if(!getViewElms || getViewElms.length == 0){
        return;
    }

    var routingService = new RoutingService(new HttpClient());

    var count = 0;

    for(x = count; getViewElms.length > x; x++){
      var getViewElm =  getViewElms[x];
      var url = getViewElm.getAttribute("data-hailstone-routing-view");

      routingService.getView(url).then(function(response) {
        var html = response;
        if(html) {
            getViewElms[count].innerHTML = html;
          }
          
         count++;
        }, function(reject){
           //TODO: handle errors
           count++;
        });      
    }
}

//Routing End