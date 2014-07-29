
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

L.Icon.Default.imagePath = 'assets/img';

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
//     fillOpacity: 0.9
// });

// Sold

function soldMap(feature) {
    return {
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#bdd194",
        fillOpacity: 0.9
    };
}

function soldMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#bdd194",
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function soldMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#79a33a",
        fillOpacity: 0.9
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
    
    "<div class='card availability" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p>"+feature.properties.lotAvailability+"</p>" +
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
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#e4aa72",
        fillOpacity: 0.9
    };
}

function availableMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#e4aa72",
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function availableMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#e38949",
        fillOpacity: 0.9
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
    
    "<div class='card availability" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p>"+feature.properties.lotAvailability+"</p>" +
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



// In Contract

function inContractMap(feature) {
    return {
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#9ac5de",
        fillOpacity: 0.9
    };
}

function inContractMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#9ac5de",
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function inContractMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#5290cc",
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function onEachFeatureinContract(feature, layer) {

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
    
    "<div class='card availability" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p>"+feature.properties.lotAvailability+"</p>" +
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
        mouseover: inContractMapHighlight,
        mouseout: inContractMapResetHighlight,   
    });
}

geojson = L.geoJson(inContract, {
    style: inContractMap,
    onEachFeature: onEachFeatureinContract,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);



// Not Released

function notReleasedMap(feature) {
    return {
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#dedbd9",
        fillOpacity: 0.9
    };
}

function notReleasedMapResetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#dedbd9",
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function notReleasedMapHighlight(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#a3a2a1",
        fillOpacity: 0.9
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
    
    "<div class='card availability" + "'" + ">" + 
        "<h2>" + feature.properties.activityTitle + "</h2>" +
        // "<img src=" + feature.properties.image +  ">" + 
        "<div class='col-md-4" + "'" + ">" +
            "<p>AVAILABILITY</p>" +
            "<p>"+feature.properties.lotAvailability+"</p>" +
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



