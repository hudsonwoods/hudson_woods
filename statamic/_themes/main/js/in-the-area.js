
var greenIcon = L.icon({
    iconUrl: 'assets/img/icon.png',


    iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});


var map = L.map('map', {
    center: [41.888197384322616, -74.31966662406921],
    zoom: 11,
    scrollWheelZoom: false
});


L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
	maxZoom: 18,
	// attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	// 	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	// 	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-20v6611k'
}).addTo(map);

//array to store layers for each feature type
var mapLayerGroups = [];

//draw GEOJSON - don't add the GEOJSON layer to the map here
L.geoJson(itaSleep, {onEachFeature: onEachFeature})//.addTo(map);

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

	"<div class='tile area " + feature.properties.classType + "'" + ">" + 
	"<h4>" + feature.properties.activity + "</h4>" +
	"<h2>" + feature.properties.activityTitle + "</h2>" +
	"<img src=" + feature.properties.image +  ">" + 
	"<p>" + feature.properties.activityDescription + "</p>" +
	"<a target=_blank href=" + feature.properties.website + ">" + feature.properties.website + "</a>" +
	"</div>";

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.foo;
	}

	layer.bindPopup(popupContent,popupOptions);
}

L.geoJson([itaSleep, itaEat], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: greenIcon});
	}
}).addTo(map);

// L.geoJson([itaEat], {

// 	style: function (feature) {
// 		return feature.properties && feature.properties.style;
// 	},

// 	onEachFeature: onEachFeature,

// 	pointToLayer: function (feature, latlng) {
// 		return L.marker(latlng, {icon: greenIcon});
// 	}
// }).addTo(map);

// L.geoJson([campus], {

// 	style: function (feature) {
// 		return feature.properties && feature.properties.style;
// 	},

// 	onEachFeature: onEachFeature,

// 	pointToLayer: function (feature, latlng) {
// 		return L.marker(latlng);
// 	}
// }).addTo(map);


// //array to store layers for each feature type
// var mapLayerGroups = [];

// //draw GEOJSON - don't add the GEOJSON layer to the map here
// L.geoJson(itaSleep, {onEachFeature: onEachFeature})//.addTo(map);

// /*
//  *for all features create a layerGroup for each feature type and add the feature to the    layerGroup
// */
// function onEachFeature(feature, featureLayer) {

//     //does layerGroup already exist? if not create it and add to map
//     var lg = mapLayerGroups[feature.properties.type];

//     if (lg === undefined) {
//         lg = new L.layerGroup();
//         //add the layer to the map
//         lg.addTo(map);
//         //store layer
//         mapLayerGroups[feature.properties.type] = lg;
//     }

//     //add the feature to the layer
//     lg.addLayer(featureLayer);    

// }

// //Show layerGroup with feature of "type1"
// showLayer("Feature");

// /*
// * show/hide layerGroup   
// */
// function showLayer(id) {
//     var lg = mapLayerGroups[id];
//     map.addLayer(lg);   
// }
// function hideLayer(id) {
//     var lg = mapLayerGroups[id];
//     map.removeLayer(lg);   
// }



