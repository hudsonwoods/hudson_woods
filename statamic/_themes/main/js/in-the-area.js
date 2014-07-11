
var sleepIcon = L.icon({
    iconUrl: 'assets/img/itaSleep-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var cultureIcon = L.icon({
    iconUrl: 'assets/img/itaCulture-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var eatIcon = L.icon({
    iconUrl: 'assets/img/itaEat-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var mindIcon = L.icon({
    iconUrl: 'assets/img/itaMind-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var pickIcon = L.icon({
    iconUrl: 'assets/img/itaPick-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var sipIcon = L.icon({
    iconUrl: 'assets/img/itaSip-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});


var skiIcon = L.icon({
    iconUrl: 'assets/img/itaSki-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var swimIcon = L.icon({
    iconUrl: 'assets/img/itaSwim-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var swingIcon = L.icon({
    iconUrl: 'assets/img/itaSwing-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var trailsIcon = L.icon({
    iconUrl: 'assets/img/itaTrails-icon.png',
   	iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map', {
    center: [41.888197384322616, -74.20966662406921],
    zoom: 10,
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
L.geoJson(itaSip, {onEachFeature: onEachFeature})//.addTo(map);

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

// L.geoJson([itaSleep, itaEat, itaSip, itaSwing, itaSwim, itaTrails, itaSki, itaCulture, itaPickAndGrow, itaMindAndBody], {

// 	style: function (feature) {
// 		return feature.properties && feature.properties.style;
// 	},

// 	onEachFeature: onEachFeature,

// 	pointToLayer: function (feature, latlng) {
// 		return L.marker(latlng, {icon: greenIcon});
// 	}
// }).addTo(map);

L.geoJson([itaSleep], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: sleepIcon});
	}
}).addTo(map);

L.geoJson([itaEat], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: eatIcon});
	}
}).addTo(map);

L.geoJson([itaSip], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: sipIcon});
	}
}).addTo(map);

L.geoJson([itaSwing], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: swingIcon});
	}
}).addTo(map);

L.geoJson([itaTrails], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: trailsIcon});
	}
}).addTo(map);

L.geoJson([itaSki], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: skiIcon});
	}
}).addTo(map);


L.geoJson([itaCulture], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: cultureIcon});
	}
}).addTo(map);

L.geoJson([itaPickAndGrow], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: pickIcon});
	}
}).addTo(map);

L.geoJson([itaMindAndBody], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {icon: mindIcon});
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



