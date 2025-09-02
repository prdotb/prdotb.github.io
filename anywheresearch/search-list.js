function buildSearchList (data) {
	console.log ("build search list")

	$.each(data.hotels, function(i, obj){
		$(".hotel-list").append(
              "<div class='results-card'>" 
              + "<div class='photo' style='background: url(" + obj.images + "); no-repeat; background-size: cover;'>" 
                + "<div class='count'>1 / 17</div>"
                + "<div class='save'><img src='img/heart.svg' /></div>" 
                + "<div class='prev'><img src='img/chevron-left.svg' /></div>"
                + "<div class='next'><img src='img/chevron-right.svg' /></div>"
              + "</div>"
              + "<div class='content'>"
                + "<div class='name'>" + obj.name + "</div>"
                + "<div class='rating'>"
                  + "<div class='star'>" + obj.starRating + "</div>" 
                  + "<img src='img/ta.png' class='ta'/><span class='reviews'>" + obj.ta.taReviewsNum + " reviews</span>"
                + "</div>"
                + "<div class='detail' style='margin-top:8px;'>"
                  + "<img src='img/map.svg' class='icon' />"
                  + "<span class='inline'><a href='#' rel='"+ obj.destination.geogId +"' class='map-link'>" + obj.destination.resort + " " + obj.destination.region + " " + obj.destination.country +"</a></span>"
                  + "</div>"
                + "<div class='detail' style='margin-top:8px;'>"
                  + "<img src='img/cal.svg' class='icon' />"
                  + "<span class='inline' style='font-size:14px;'>" + obj.dateRange + "</span>"
                + "</div>"
                + "<div class='detail'>"
                  + "<img src='img/flight.svg' class='icon' />" 
                  + "<span class='inline'><a href='#'' class='inline-link'>" + obj.flight.direct + " from " + obj.flight.departureAirport + "</a></span>"
                + "</div>"
                + "<div class='detail'>"
                  + "<img src='img/board.svg' class='icon' />"
                  + "<span class='inline'>" + obj.boardBasis + "</span>"
                + "</div>"
                + "<div class='detail'>"
                  + "<img src='img/bags.svg' class='icon' />"
                  + "<span class='inline'><a href='#'' class='inline-link'>Hold bags:" + obj.flight.holdBags + "</a></span>"
                + "</div>" 
              + "</div>"
              + "<div class='action'>" 
                + "<div class='price'>"
                  + "<div class='from'>Prices from</div>"
                  + "<div class='price-lead'>£" + obj.price.pricePerPerson + "<span>pp</span></div>"
                  + "<div class='price-secondary'>£" + obj.price.totalPrice + " Total Price</div>"
                + "</div>"
                + "<div class='cta'>"
                  + "<div class='button'>More details</div>"
                + "</div>"
              + "</div>"
              + "</div>"
            );
	})
}

function buildSearchListMobile (data) {
  console.log ("build search list mobile")

  $.each(data.hotels, function(i, obj){
    $(".hotel-list").append(
      "<div class='results-card'>" 
        + "<div class='photo' style='background: url(" + obj.images + "); no-repeat; background-size: cover;'>" 
          + "<div class='count'>1 / 17</div>"
          + "<div class='save'><img src='img/heart.svg' /></div>" 
          + "<div class='prev'><img src='img/chevron-left.svg' /></div>"
          + "<div class='next'><img src='img/chevron-right.svg' /></div>"
        + "</div>"
        + "<div class='content'>"
          + "<div class='name'>" + obj.name + "</div>"
          + "<div class='rating'>"
            + "<div class='star'>" + obj.starRating + "</div>" 
            + "<img src='img/ta.png' class='ta'/><span class='reviews'>" + obj.ta.taReviewsNum + " reviews</span>"
          + "</div>"
          + "<div class='detail' style='margin-top:8px;'>"
            + "<img src='img/map.svg' class='icon' />"
            + "<span class='inline'><a href='#' rel='"+ obj.destination.geogId +"' class='map-link'>" + obj.destination.resort + " " + obj.destination.region + " " + obj.destination.country +"</a></span>"
          + "</div>"
          
          + "<div class='detail' style='margin-top:8px;'>"
            + "<img src='img/cal.svg' class='icon' />"
            + "<span class='inline' style='font-size:14px;'>" + obj.dateRange + "</span>"
          + "</div>"
          + "<div class='detail'>"
            + "<img src='img/flight.svg' class='icon' />" 
            + "<span class='inline'><a href='#'' class='inline-link'>" + obj.flight.direct + " from " + obj.flight.departureAirport + "</a></span>"
          + "</div>"
          + "<div class='detail'>"
            + "<img src='img/board.svg' class='icon' />"
            + "<span class='inline'>" + obj.boardBasis + "</span>"
          + "</div>"
          + "<div class='detail'>"
            + "<img src='img/bags.svg' class='icon' />"
            + "<span class='inline'><a href='#'' class='inline-link'>Hold bags:" + obj.flight.holdBags + "</a></span>"
          + "</div>"
        + "</div>"
        + "<div class='action'>" 
          + "<div class='price'>"
            + "<div class='from'>Prices from</div>"
            + "<div class='price-lead'>£" + obj.price.pricePerPerson + "<span>pp</span></div>"
            + "<div class='price-secondary'>£" + obj.price.totalPrice + " Total Price</div>"
          + "</div>"
          + "<div class='cta'>"
            + "<div class='button'>More details</div>"
          + "</div>"
        + "</div>"
      + "</div>"
    ); 
  })
} 

function buildDestinationList (data, mapBoxToken) {
  console.log("building dests"); 

  $.each(data.destinations, function(i, obj){
    var region = ""
    if (obj.region != null) {
      region = obj.region + ","
    }

    var destHighlightsList = ""

    for (let i in obj.description.highlights) {
      destHighlightsList += "<li>" + obj.description.highlights[i] + "</li>";
    }

    $(".dest-list").append(
      "<div id='" + obj.id + "' class='dest-card'>"
        + "<div><img class='map' src='" + obj.mapImgUrl + "?access_token=" + mapBoxToken + "' />"
        + "<div class='dest-content'>"
          + "<div class='name'>" + obj.name + "</div>"
          + "<div class='location'>" + region + " " + obj.country + "</div>"
          + "<img class='hero' src='des-photos/" + obj.images[0] + "'/>"
          + "<div class='data-points'>"
            + "<div><span class='label'>Average temp:</span> <span class='value'>" + obj.aveTemperature.june + "&#176C</span></div>"
            + "<div><span class='label'>Flight Time:</span> <span class='value'>" + obj.flightTime + "</span></div>"
            + "<div><span class='label'>Transfer Time:</span> <span class='value'>" + obj.transferTime + "</span></div>"
          + "</div>"
          + "<div class='description'>"
            + "<p>" + obj.description.snippet + "</p>"
            + "<ul>" + destHighlightsList + "</ul>"
          + "</div>"
        + "</div>"
      + "</div>"
    )
  });

}

function buildDestinationListDesktop (data, mapBoxToken) {

  $.each(data.destinations, function(i, obj){
    console.log(obj.id); 

    var region = ""
    if (obj.region != null) {
      region = obj.region + ","
    }

    var destHighlightsList = ""

    for (let i in obj.description.highlights) {
      destHighlightsList += "<li>" + obj.description.highlights[i] + "</li>";
    }

    $(".dest-list").append(
      "<div id='" + obj.id + "' class='dest-card'>"
        + "<div class='content-container'>"
          + "<div class='dest-content'>"
            + "<img class='hero' src='des-photos/" + obj.images[0] + "'/>"
            + "<div class='location'>" + region + " " + obj.country + "</div>"
            + "<div class='name'>" + obj.name + "</div>"
            
            + "<div class='data-points'>"
              + "<div><span class='label'>Average temp:</span> <span class='value'>" + obj.aveTemperature.june + "&#176C</span></div>"
              + "<div><span class='label'>Flight Time:</span> <span class='value'>" + obj.flightTime + "</span></div>"
              + "<div><span class='label'>Transfer Time:</span> <span class='value'>" + obj.transferTime + "</span></div>"
            + "</div>"
            
            
            + "<div class='description'>"
              + "<p>" + obj.description.snippet + "</p>"
              + "<ul>" + destHighlightsList + "</ul>"
            + "</div>"
          + "</div>"
        + "</div>"
        + "<div class='map-container'>"
          + "<iframe src='https://api.mapbox.com/styles/v1/mapbox/streets-v12.html?title=false&zoomwheel=false&access_token=" + mapBoxToken + "#" + obj.location.zoom + "/" + obj.location.lat + "/" + obj.location.lon + "/0/0'></iframe>"
        + "</div>"
        
      + "</div>"
    )

  });

}

function buildDestinationListGallery(data, mapBoxToken) {
  
  $.each(data.destinations, function(i, obj){
    var region = ""
    if (obj.region != null) {
      region = obj.region + ","
    }

    var destHighlightsList = ""
    var galleryList = ""

    for (let i in obj.description.highlights) {
      destHighlightsList += "<li>" + obj.description.highlights[i] + "</li>";
    }

    for (let i in obj.images) {
      galleryList += "<div><img src='des-photos/" + obj.images[i] + "'/></div>";
    }

    $(".dest-list").append(
      "<div id='" + obj.id + "' class='dest-card'>"
        + "<div class='content-container'>"
          + "<div class='dest-content'>"
            + "<div class='name'>" + obj.name + "</div>"
            + "<div class='location'>" + region + " " + obj.country + "</div>"
            + "<div class='data-points'>"
              + "<div><span class='label'>Average temp:</span> <span class='value'>" + obj.aveTemperature.june + "&#176C</span></div>"
              + "<div><span class='label'>Flight Time:</span> <span class='value'>" + obj.flightTime + "</span></div>"
              + "<div><span class='label'>Transfer Time:</span> <span class='value'>" + obj.transferTime + "</span></div>"
            + "</div>"
            + "<div class='description'>"
              + "<p>" + obj.description.snippet + "</p>"
              + "<ul>" + destHighlightsList + "</ul>"
              + "<div class='long-description'>" + obj.description.longer + "</div>"
            + "</div>"
          + "</div>"
        + "</div>"
        + "<div class='map-container'>"
          + "<div class='tabs'>"
            + "<div class='gallery-tab selected'><a href='#'>Photo gallery</a></div>"
            + "<div class='map-tab'><a href='#'>Map view</a></div>"
          + "</div>"
          + "<div class='gallery-view'>" + galleryList
          + "</div>"
          + "<div class='map-view'>" 
            + "<iframe src='https://api.mapbox.com/styles/v1/mapbox/streets-v12.html?title=false&zoomwheel=false&access_token=" + mapBoxToken + "#" + obj.location.zoom + "/" + obj.location.lat + "/" + obj.location.lon + "/0/0'></iframe>"
          + "</div>"
        + "</div>"
      + "</div>"
    )

  })

}



