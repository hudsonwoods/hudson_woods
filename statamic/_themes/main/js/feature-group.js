var cloudmade = L.tileLayer('http://a.tiles.mapbox.com/v3/sandersonj.i245n6m6/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; 2011 <a href="#">OpenStreetMap</a> contributors, Imagery &copy; 2011 <a href="#">CloudMade</a>',
    key: 'd4fc77ea4a63471cab2423e66626cbb6'
});

var map = L.map('map')
.setView([50.5, 30.51], 15)
.addLayer(cloudmade);

//We don't use shadows as you can't currently specify what pane shadows end up in
var greenIcon = L.icon({
    iconUrl: 'http://leafletjs.com/docs/images/leaf-green.png',
    
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var redIcon = L.icon({
    iconUrl: 'http://leafletjs.com/docs/images/leaf-red.png',
    
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});


//Create panes for each of the sets of markers
var pane1 = map.createPane('markers1');
var pane2 = map.createPane('markers2');

//Create feature groups too, these aren't really used (Can FeatureGroups take a pane? Then that could override the layers they are given maybe?)
var markers1 = new L.FeatureGroup();
var markers2 = new L.FeatureGroup();

//Add 200 markers to each of the groups/layers
function populate() {
    for (var i = 0; i < 200; i++) {
        markers1.addLayer(new L.Marker(), { pane: 'markers1', icon: greenIcon });
        markers2.addLayer(new L.Marker(), { pane: 'markers2', icon: redIcon });
    }
    return false;
}

markers1.bindPopup("blah");

map.addLayer(markers1);
map.addLayer(markers2);

populate();

function hide() {
    map.getPane('markers2').style.display = 'none';
}
function show() {
    map.getPane('markers2').style.display = '';
}

L.DomUtil.get('hidem').onclick = hide;
L.DomUtil.get('showem').onclick = show;


// function getRandomLatLng(map) {
// 	var bounds = map.getBounds(),
// 		southWest = bounds.getSouthWest(),
// 		northEast = bounds.getNorthEast(),
// 		lngSpan = northEast.lng - southWest.lng,
// 		latSpan = northEast.lat - southWest.lat;

// 	return new L.LatLng(
// 			southWest.lat + latSpan * Math.random(),
// 	        southWest.lng + lngSpan * Math.random());
// }