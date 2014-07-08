// Leaflet

var map = L.map('map', {
    center: [41.8817826, -74.3126807],
    zoom: 11,
    scrollWheelZoom: false
});


L.tileLayer('https://a.tiles.mapbox.com/v3/examples.map-i87786ca/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
}).addTo(map);