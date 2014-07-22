var map = L.mapbox.map('map', 'examples.h186knp8')
    .setView([37.9, -77], 6);

var graySleepIcon = L.icon({
    iconUrl: 'assets/img/in-the-area/icons/gray_sleep.png',
    iconSize:     [28, 40],
    iconAnchor:   [14, 0],
    popupAnchor:  [0, 10] 
});

var colorSleepIcon = L.icon({
    iconUrl: 'assets/img/in-the-area/icons/color_sleep.png',
    iconSize:     [28, 40], // size of the icon
    iconAnchor:   [14, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 10] // point from which the popup should open relative to the iconAnchor
});

var geoJson = [{
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-77, 37.9]
      },
      properties: {
          title: 'Marker One',
          'marker-color': '#bbb',
          icon: {
            iconUrl: 'assets/img/in-the-area/icons/gray_sleep.png',
            iconSize:     [28, 40],
            iconAnchor:   [14, 0],
            popupAnchor:  [0, 10] 
          }
      }
  },
  {
      type: 'Feature',
      geometry: {
          type: 'Point',
          coordinates: [-78, 36.5]
      },
      properties: {
          title: 'Marker Two',
          'marker-color': '#bbb',
          icon: {
            iconUrl: 'assets/img/in-the-area/icons/gray_sleep.png',
            iconSize:     [28, 40],
            iconAnchor:   [14, 0],
            popupAnchor:  [0, 10] 
          }
  }
}];

var myLayer = L.mapbox.featureLayer().addTo(map);

myLayer.setGeoJSON(geoJson);

function resetColors() {
    for (var i = 0; i < geoJson.length; i++) {
        geoJson[i].properties['marker-color'] = geoJson[i].properties['old-color'] ||
            geoJson[i].properties['marker-color'];
    }
    myLayer.setGeoJSON(geoJson);
}

myLayer.on('click', function(e) {
    resetColors();
    e.layer.feature.properties['old-color'] = e.layer.feature.properties['marker-color'];
    e.layer.feature.properties['marker-color'] = '#ff8888';
    myLayer.setGeoJSON(geoJson);
});

map.on('click', resetColors);