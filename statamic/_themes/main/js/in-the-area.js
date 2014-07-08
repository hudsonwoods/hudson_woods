// // Leaflet

// var map = L.map('map', {
//     center: [41.8817826, -74.3126807],
//     zoom: 15,
//     scrollWheelZoom: false
// });


// L.tileLayer('https://a.tiles.mapbox.com/v3/philippeio.icka506o/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18,
// }).addTo(map);

// var greenIcon = L.icon({
//     iconUrl: '../statamic/_themes/main/img/icon.png',


//     iconSize:     [28, 40], // size of the icon
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [41.8817826, -74.3126807] // point from which the popup should open relative to the iconAnchor
// });



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

// var map = L.map('map', {
//     center: [39.74739, -105],
//     zoom: 15,
//     scrollWheelZoom: false
// });
		var map = L.map('map').setView([39.74739, -105], 13);

		L.tileLayer('https:\/\/a.tiles.mapbox.com\/v3\/examples.map-i87786ca\/{z}\/{x}\/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-20v6611k'
		}).addTo(map);

		var baseballIcon = L.icon({
			iconUrl: 'baseball-marker.png',
			iconSize: [32, 37],
			iconAnchor: [16, 37],
			popupAnchor: [0, -28]
		});

		function onEachFeature(feature, layer) {
			var popupContent = "<p>I started out as a GeoJSON " +
					feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

			if (feature.properties && feature.properties.popupContent) {
				popupContent += feature.properties.popupContent;
			}

			layer.bindPopup(popupContent);
		}

		L.geoJson([bicycleRental, campus], {

			style: function (feature) {
				return feature.properties && feature.properties.style;
			},

			onEachFeature: onEachFeature,

			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 8,
					fillColor: "#ff7800",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}
		}).addTo(map);

		L.geoJson(freeBus, {

			filter: function (feature, layer) {
				if (feature.properties) {
					// If the property "underConstruction" exists and is true, return false (don't render features under construction)
					return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
				}
				return false;
			},

			onEachFeature: onEachFeature
		}).addTo(map);

		var coorsLayer = L.geoJson(coorsField, {

			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: baseballIcon});
			},

			onEachFeature: onEachFeature
		}).addTo(map);

