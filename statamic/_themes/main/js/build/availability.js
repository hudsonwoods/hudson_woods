
var map = L.map('map', {
    center: [41.8872809, -74.3138479],
    zoom: 16,
    scrollWheelZoom: false,
    zoomControl: false,
    // doubleClickZoom: false
});

L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
    id: 'sandersonj.i245n6m6'
}).addTo(map);

// L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
//             maxZoom: 18,
//             attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//                 '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//                 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//             id: 'examples.map-i86knfo3'
//         }).addTo(map);

// array to store layers for each feature type
var mapLayerGroups = [];

L.Icon.Default.imagePath = 'assets/img/availability/icons';

//draw GEOJSON - don't add the GEOJSON layer to the map here
// L.geoJson([available, unavailable], {onEachFeature: onEachFeature})//.addTo(map);

// Set Global Popup Options
var popupOptions = {
    maxWidth: 400,
    keepInView: false,
    closeButton: true,
    autoPanPadding: [30, 30]
};

// Draw Map Labels


var callLocatorLayer = L.geoJson(labels, {
    pointToLayer: function (feature, latlng)
    {
        return L.marker(latlng).bindLabel( feature.properties.MAP_LABEL, { noHide: true });
    }
}).addTo(map);

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function resetMap(e) {
    map.setView(new L.LatLng(41.8872809, -74.3138479), 16);

}

// var availableMap = layer.setStyle({
//     weight: 2,
//     color: "#fff",
//     opacity: 1,
//     fillColor: "#79a33a",
//     fillOpacity: 1
// });

// Sold

function soldMap(feature) {
    return {
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#8fb043",
        fillOpacity: .85
    };
}

function soldMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#8fb043",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function soldMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: "#676566",
        opacity: 1,
        fillColor: "#8fb043",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeaturesold(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

    var popupContent = 
    
    "<div class='card availability sold" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+"Sold"+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>" + feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        "<div class='row" + "'" + ">" + "</div>" +
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: soldMapHighlight,
        mouseout: soldMapResetHighlight,  
        popupclose: resetMap 
    });
}

geojson = L.geoJson(sold, {
    style: soldMap,
    onEachFeature: onEachFeaturesold,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);



// For Sale

function availableMap(feature) {
    return {
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#918279",
        fillOpacity: .85
    };
}

function availableMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#918279",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function availableMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: "#676566",
        opacity: 1,
        fillColor: "#918279",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeatureAvailable(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

    var popupContent = 
    
    "<div class='card availability for-sale" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+"For Sale"+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>"+feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        "<div class='row" + "'" + ">" + "</div>" +
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: availableMapHighlight,
        mouseout: availableMapResetHighlight,
        popupclose: resetMap    
    });
}

geojson = L.geoJson(available, {
    style: availableMap,
    onEachFeature: onEachFeatureAvailable,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);



// Contract Out

function contractOutMap(feature) {
    return {
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#c9d4b0",
        fillOpacity: .85
    };
}

function contractOutMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#c9d4b0",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function contractOutMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: "#676566",
        opacity: 1,
        fillColor: "#c9d4b0",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeaturecontractOut(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

    var popupContent = 
    
    "<div class='card availability contract-out" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-5" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+"Contract Out"+"</p>" +
        "</div>" + 
        "<div class='col-md-3" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>"+feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        "<div class='row" + "'" + ">" + "</div>" +
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: contractOutMapHighlight,
        mouseout: contractOutMapResetHighlight,
        popupclose: resetMap    
    });
}

geojson = L.geoJson(contractOut, {
    style: contractOutMap,
    onEachFeature: onEachFeaturecontractOut,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);



// Not Released

function notReleasedMap(feature) {
    return {
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#cfc9c2",
        fillOpacity: .85
    };
}

function notReleasedMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#cfc9c2",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function notReleasedMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: "#676566",
        opacity: 1,
        fillColor: "#cfc9c2",
        fillOpacity: .85
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeaturenotReleased(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

    var popupContent = 
    
    "<div class='card availability not-released" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-5" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+"Not Released"+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>"+feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-3" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        "<div class='row" + "'" + ">" + "</div>" +
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: notReleasedMapHighlight,
        mouseout: notReleasedMapResetHighlight,
        popupclose: resetMap    
    });
}

geojson = L.geoJson(notReleased, {
    style: notReleasedMap,
    onEachFeature: onEachFeaturenotReleased,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);




// Not Available

function notAvailableMap(feature) {
    return {
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#cfc9c2",
        fillOpacity: .85
    };
}

function onEachFeaturenotAvailable(feature, layer) {
    //does layerGroup already exist? if not create it and add to map
    var lg = mapLayerGroups[feature.properties.type];
}

geojson = L.geoJson(notAvailable, {
    style: notAvailableMap,
    onEachFeature: onEachFeaturenotAvailable,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);

