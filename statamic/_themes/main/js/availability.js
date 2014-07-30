
var map = L.map('map', {
    center: [41.8872809, -74.3138479],
    zoom: 16,
    scrollWheelZoom: false,
    zoomControl: false
});

L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
    id: 'sandersonj.i245n6m6'
}).addTo(map);

// array to store layers for each feature type
var mapLayerGroups = [];

L.Icon.Default.imagePath = 'assets/img/availability/icons';

//draw GEOJSON - don't add the GEOJSON layer to the map here
// L.geoJson([available, unavailable], {onEachFeature: onEachFeature})//.addTo(map);

// Set Global Popup Options
var popupOptions = {
    maxWidth: 400,
    keepInView: true,
    closeButton: false,
    keepInView: true,
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
        fillColor: "#bdd194",
        fillOpacity: 1
    };
}

function soldMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#bdd194",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function soldMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#9ebd60",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeaturesold(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

        var popupOptions = {
            maxWidth: 400,
            keepInView: true,
            closeButton: false,
            keepInView: true,
            autoPanPadding: [30, 30]
        };

    var popupContent = 
    
    "<div class='card availability sold" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+feature.properties.lotAvailability+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>" + feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Details & Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: soldMapHighlight,
        mouseout: soldMapResetHighlight,   
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
        fillColor: "#f4816c",
        fillOpacity: 1
    };
}

function availableMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#f4816c",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function availableMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#f2644b",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeatureAvailable(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

        var popupOptions = {
            maxWidth: 400,
            keepInView: true,
            closeButton: false,
            keepInView: true,
            autoPanPadding: [30, 30]
        };

    var popupContent = 
    
    "<div class='card availability for-sale" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+feature.properties.lotAvailability+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>"+feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Details & Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: availableMapHighlight,
        mouseout: availableMapResetHighlight,   
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
        fillColor: "#9dd3d0",
        fillOpacity: 1
    };
}

function contractOutMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#9dd3d0",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function contractOutMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#48d4cd",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeaturecontractOut(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

        var popupOptions = {
            maxWidth: 400,
            keepInView: true,
            closeButton: false,
            keepInView: true,
            autoPanPadding: [30, 30]
        };

    var popupContent = 
    
    "<div class='card availability contract-out" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-5" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+feature.properties.lotAvailability+"</p>" +
        "</div>" + 
        "<div class='col-md-3" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>"+feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Details & Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: contractOutMapHighlight,
        mouseout: contractOutMapResetHighlight,   
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
        fillColor: "#d0cebf",
        fillOpacity: 1
    };
}

function notReleasedMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#d0cebf",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function notReleasedMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 1,
        color: "#fff",
        opacity: 1,
        fillColor: "#bab8ab",
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeaturenotReleased(feature, layer) {

        //does layerGroup already exist? if not create it and add to map
        var lg = mapLayerGroups[feature.properties.type];

        var popupOptions = {
            maxWidth: 400,
            keepInView: true,
            closeButton: false,
            keepInView: true,
            autoPanPadding: [30, 30]
        };

    var popupContent = 
    
    "<div class='card availability not-released" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-5" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p class='status" + "'" + ">"+feature.properties.lotAvailability+"</p>" +
        "</div>" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>SIZE</p>" +
            "<p>"+feature.properties.lotSize+"</p>" +
        "</div>" + 
        "<div class='col-md-3" + "'" + ">" +
            "<p>COST</p>" +
            "<p>"+feature.properties.cost+"</p>" +
        "</div>" + 
        
        "<a href=" + feature.properties.lotURL + ">" + 
        "<i class='fa fa-search" + "'" +">" + "</i>" +
        "View Details & Floor Plans" + 
        "</a>" +
    
    "</div>";


    layer.bindPopup(popupContent,popupOptions);
    layer.on({
        mouseover: notReleasedMapHighlight,
        mouseout: notReleasedMapResetHighlight,   
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
        fillColor: "#d0cebf",
        fillOpacity: 1
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


