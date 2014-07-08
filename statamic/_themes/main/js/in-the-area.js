// var map = L.map('map', {
//     center: [41.8817826, -74.3126807],
//     zoom: 11,
//     scrollWheelZoom: false
// });


// L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
// }).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'assets/img/icon.png',


    iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});



// var marker = L.marker([41.8817826, -74.3126807],{icon: greenIcon}).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup. What happens if I get longer?");

// L.mapbox.map('map', 'philippeio.icka506o');

// var map = L.mapbox.map('map', 'philippeio.icka506o').setView([41.8817826, -74.3126807], 9);
	    // center: [41.8817826, -74.3126807],
	    // zoom: 15,
	    // scrollWheelZoom: false);

// geocoder.query('Chester, NJ', showMap);

// function showMap(err, data) {
//     // The geocoder can return an area, like a city, or a
//     // point, like an address. Here we handle both cases,
//     // by fitting the map bounds to an area or zooming to a point.
//     if (data.lbounds) {
//         map.fitBounds(data.lbounds);
//     } else if (data.latlng) {
//         map.setView([data.latlng[0], data.latlng[1]], 13);
//     }
// }

var map = L.map('map', {
    center: [39.74739, -105],
    zoom: 15,
    scrollWheelZoom: false
});
		// var map = L.map('map').setView([39.74739, -105], 14);

		L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-20v6611k'
		}).addTo(map);

		// var baseballIcon = L.icon({
		// 	iconUrl: 'baseball-marker.png',
		// 	iconSize: [32, 37],
		// 	iconAnchor: [16, 37],
		// 	popupAnchor: [0, -28]
		// });

		function onEachFeature(feature, layer) {
			var popupContent = "<p class="+feature.properties.activity+">" + feature.properties.activity + "</p>";

			if (feature.properties && feature.properties.popupContent) {
				popupContent += feature.properties.foo;
			}

			layer.bindPopup(popupContent);
		}

		// function onEachFeature(feature, layer) {
		// 	var popupContent = "<p>I started out as a GeoJSON " +
		// 			feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

		// 	if (feature.properties && feature.properties.popupContent) {
		// 		popupContent += feature.properties.popupContent;
		// 	}

		// 	layer.bindPopup(popupContent);
		// }

		// L.geoJson([bicycleRental], {

		// 	style: function (feature) {
		// 		return feature.properties && feature.properties.style;
		// 	},

		// 	onEachFeature: onEachFeature,

		// 	pointToLayer: function (feature, latlng) {
		// 		return L.circleMarker(latlng, {
		// 			radius: 8,
		// 			fillColor: "#ff7800",
		// 			color: "#000",
		// 			weight: 1,
		// 			opacity: 1,
		// 			fillOpacity: 0.8
		// 		});
		// 	}
		// }).addTo(map);

		L.geoJson([itaSleep], {

			style: function (feature) {
				return feature.properties && feature.properties.style;
			},

			onEachFeature: onEachFeature,

			// pointToLayer: function (feature, latlng) {
			// 	return L.circleMarker(latlng, {
			// 		radius: 8,
			// 		fillColor: "#ff7800",
			// 		color: "#000",
			// 		weight: 1,
			// 		opacity: 1,
			// 		fillOpacity: 0.8
			// 	});
			// }
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: greenIcon});
			}
		}).addTo(map);

		// L.geoJson(freeBus, {

		// 	filter: function (feature, layer) {
		// 		if (feature.properties) {
		// 			// If the property "underConstruction" exists and is true, return false (don't render features under construction)
		// 			return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
		// 		}
		// 		return false;
		// 	},

		// 	onEachFeature: onEachFeature
		// }).addTo(map);

		// var coorsLayer = L.geoJson(coorsField, {

		// 	pointToLayer: function (feature, latlng) {
		// 		return L.marker(latlng, {icon: baseballIcon});
		// 	},

		// 	onEachFeature: onEachFeature
		// }).addTo(map);

