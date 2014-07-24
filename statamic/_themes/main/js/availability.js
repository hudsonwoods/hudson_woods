
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
L.geoJson([available, unavailable], {onEachFeature: onEachFeature})//.addTo(map);

function style(feature) {
    return {
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#bdd194",
        fillOpacity: 0.8
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: "#fff",
        opacity: 1,
        fillColor: "#79a33a",
        fillOpacity: 0.8
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

L.Icon.Default.imagePath = 'assets/img';

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {

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
        mouseover: highlightFeature,
        mouseout: resetHighlight,   
    });
}

geojson = L.geoJson(available, {
    style: style,
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);


L.geoJson([unavailable], {
    style: function (feature) {
        return {
            weight: 2,
            color: "#fff",
            opacity: 1,
            fillColor: "#ddd8d6",
            fillOpacity: 0.8
        } 
    }
}).addTo(map);

var callLocatorLayer = L.geoJson(labels, {
    pointToLayer: function (feature, latlng)
    {
        return L.marker(latlng).bindLabel( feature.properties.MAP_LABEL, { noHide: true });
    }
}).addTo(map);






