
var greenIcon = L.icon({
    iconUrl: 'assets/img/icon.png',
    imagePath: 'assets/img/icon.png',

    iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

L.Icon.Default.imagePath = 'assets/img';

var map = L.map('map', {
    center: [41.8872809, -74.3138479],
    zoom: 16,
    scrollWheelZoom: false,
    zoomControl: false
});

// map.dragging.disable();
// map.touchZoom.disable();
// map.doubleClickZoom.disable();
// map.scrollWheelZoom.disable();


L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
    maxZoom: 18,
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    //  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'sandersonj.i245n6m6'
}).addTo(map);

// array to store layers for each feature type
var mapLayerGroups = [];

//draw GEOJSON - don't add the GEOJSON layer to the map here
L.geoJson([available, unavailable], {onEachFeature: onEachFeature})//.addTo(map);

/*
 *for all features create a layerGroup for each feature type and add the feature to the    layerGroup
*/



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
    
    "<div class='tile availability" + "'" + ">" + 
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

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.foo;
    }

    layer.bindPopup(popupContent,popupOptions);
}

L.geoJson([available], {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
}).addTo(map);

L.geoJson([unavailable], {

    style: function (feature) {
        return feature.properties.style;
    },


}).addTo(map);




// var cloudmadeUrl = 'http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png',
//     cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18}),
//     map = new L.Map('map', {layers: [cloudmade], center: new L.LatLng(41.888197384322616, -74.31966662406921), zoom: 15 });



var callLocatorLayer = L.geoJson(data,
{

    pointToLayer: function (feature, latlng)
    {
         return L.marker(latlng).bindLabel( feature.properties.MAP_LABEL, { noHide: true });
    }

}).addTo(map);

// var callLocatorLayer = L.geoJson(data,
// {
//     style: function (feature)
//     {

//         return {color: '#03f'};
//     }
//     ,
//     pointToLayer: function (feature, latlng)
//     {
//          return L.marker(latlng).bindLabel( feature.properties.MAP_LABEL, { noHide: true });
//     },
//     onEachFeature: function (feature, layer) {
//         var myLayer = layer;

//         myLayer.bindPopup('<b>STATUS:</b>');

//         return myLayer;
//     }
// }).addTo(map);




