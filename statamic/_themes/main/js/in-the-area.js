
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
    center: [41.77197384322616, -74.20966662406921],
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
// L.geoJson(itaSip, {onEachFeature: onEachFeature})//.addTo(map);

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



var pane1 = map.createPane('itaSleep ita');
var pane2 = map.createPane('itaEat ita');
var pane3 = map.createPane('itaSip ita');
var pane4 = map.createPane('itaSwing ita');
var pane5 = map.createPane('itaSwim ita');
var pane6 = map.createPane('itaTrails ita');
var pane7 = map.createPane('itaSki ita');
var pane8 = map.createPane('itaCulture ita');
var pane9 = map.createPane('itaPickAndGrow ita');
var pane10 = map.createPane('itaMindAndBody ita');


// L.geoJson([itaSleep, itaEat, itaSip, itaSwing, itaSwim, itaTrails, itaSki, itaCulture, itaPickAndGrow, itaMindAndBody], {

// 	style: function (feature) {
// 		return feature.properties && feature.properties.style;
// 	},

// 	onEachFeature: onEachFeature,

// 	pointToLayer: function (feature, latlng) {
// 		return L.marker(latlng, {icon: greenIcon});
// 	}
// }).addTo(map);

var itaSleep = L.geoJson([itaSleep], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaSleep ita', icon: sleepIcon});
	}
});
var SleepBounds = itaSleep.getBounds();
itaSleep.addTo(map);




var itaEat = L.geoJson([itaEat], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaEat ita', icon: eatIcon});
	}
});
var EatBounds = itaEat.getBounds();
itaEat.addTo(map);




var itaSip = L.geoJson([itaSip], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaSip ita', icon: sipIcon});
	}
});
var SipBounds = itaSip.getBounds();
itaSip.addTo(map);




var itaSwing = L.geoJson([itaSwing], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaSwing ita', icon: swingIcon});
	}
});
var SwingBounds = itaSwing.getBounds();
itaSwing.addTo(map);




var itaTrails = L.geoJson([itaTrails], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaTrails ita', icon: trailsIcon});
	}
});
var TrailsBounds = itaTrails.getBounds();
itaTrails.addTo(map);



var itaSwim = L.geoJson([itaSwim], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaSwim ita', icon: swimIcon});
	}
});
var SwimBounds = itaSwim.getBounds();
itaSwim.addTo(map);




var itaSki = L.geoJson([itaSki], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaSki ita', icon: skiIcon});
	}
});
var SkiBounds = itaSki.getBounds();
itaSki.addTo(map);




var itaCulture = L.geoJson([itaCulture], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaCulture ita', icon: cultureIcon});
	}
});
var CultureBounds = itaCulture.getBounds();
itaCulture.addTo(map);




var itaPickAndGrow = L.geoJson([itaPickAndGrow], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaPickAndGrow ita', icon: pickIcon});
	}
});
var PickAndGrowBounds = itaPickAndGrow.getBounds();
itaPickAndGrow.addTo(map);




var itaMindAndBody = L.geoJson([itaMindAndBody], {

	style: function (feature) {
		return feature.properties && feature.properties.style;
	},

	onEachFeature: onEachFeature,

	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, {pane: 'itaMindAndBody ita', icon: mindIcon});
	},
});
var MindAndBodyBounds = itaMindAndBody.getBounds();
itaMindAndBody.addTo(map);




$('.ita-pane').addClass('active');
$('#all').addClass('active');

$('.markers').click(function(){
	$('.ita-pane').removeClass('active');
	$('.markers').removeClass('active');
	$(this).addClass('active');
	map.closePopup()

});

$( "#all" ).click(function() {
  $('.ita-pane').addClass('active');
  map.setView(new L.LatLng(41.77197384322616, -74.20966662406921), 10)
});



$( "#sleep" ).click(function() {
  $('.leaflet-itaSleep').addClass('active');
  map.fitBounds(itaSleep,{
  	padding: [50,50]
  });
});

$( "#eat" ).click(function() {
  $('.leaflet-itaEat').addClass('active');
  map.fitBounds(itaEat,{
  	padding: [50,50]
  });
});

$( "#sip" ).click(function() {
  $('.leaflet-itaSip').addClass('active');
  map.fitBounds(itaSip,{
  	padding: [50,50]
  });
});

$( "#culture" ).click(function() {
  $('.leaflet-itaCulture').addClass('active');
  map.fitBounds(itaCulture,{
  	padding: [50,50]
  });
});

$( "#swing" ).click(function() {
  $('.leaflet-itaSwing').addClass('active');
  map.fitBounds(itaSwing,{
  	padding: [50,50]
  });
});

$( "#ski" ).click(function() {
  $('.leaflet-itaSki').addClass('active');
  map.fitBounds(itaSki,{
  	padding: [50,50]
  });
});

$( "#swim" ).click(function() {
  $('.leaflet-itaSwim').addClass('active');
  map.fitBounds(itaSwim,{
  	padding: [50,50]
  });
});

$( "#pick-and-grow" ).click(function() {
  $('.leaflet-itaPickAndGrow').addClass('active');
  map.fitBounds(itaPickAndGrow,{
  	padding: [50,50]
  });
});

$( "#trails" ).click(function() {
  $('.leaflet-itaTrails').addClass('active');
  map.fitBounds(itaTrails,{
  	padding: [50,50]
  });
});

$( "#mind-and-body" ).click(function() {
  $('.leaflet-itaMindAndBody').addClass('active');
  map.fitBounds(itaMindAndBody,{
  	padding: [50,50]
  });
});


// function hide() {
//     map.getPane('itaMindAndBody').style.display = 'none';
// }
// function show() {
//     map.getPane('itaMindAndBody').style.display = '';
// }

// L.DomUtil.get('hidem').onclick = hide;
// L.DomUtil.get('showem').onclick = show;

// function itaMindAndBodyPopulate() {
// 	itaMindAndBody.addLayer(new L.Marker(), {pane: 'markers1'});
// 	return false;
// }

// itaMindAndBodyPopulate();

// var basemap = map.createPane('basemap'),
//   country = L.geoJson(itaEat, {
//       style: {
//           pane: basemap,
//       },
//       icon: mindIcon
//   }).addTo(map);



// var itaMindAndBody = L.geoJson([itaMindAndBody], {

// 	style: function (feature) {
// 		return feature.properties && feature.properties.style;
// 	},

// 	onEachFeature: onEachFeature,

// 	pointToLayer: function (feature, latlng) {
// 		return L.marker(latlng, {icon: mindIcon});
// 	}
// }).addTo(map);


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


