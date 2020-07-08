var map = L.map('map', {
    renderer: L.canvas()
}).setView([38.02, 23.74], 7);


// basemaps
var osm = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// map layers /////////////////////////////////////////////////////////////////

// network
var primary = L.geoJSON.ajax("data/roads_primary.geojson", { style: { "color": "#a8ddb5", "weight": 1 } }).addTo(map);
var trunk = L.geoJSON.ajax("data/roads_trunk.geojson", { style: { "color": "#9ebcda", "weight": 2 } }).addTo(map);
var motorway = L.geoJSON.ajax("data/roads_motorway.geojson", { style: { "color": "#e34a33", "weight": 2.5 } }).addTo(map);

var rail = L.geoJSON.ajax("data/rail_network.geojson", { style: { "color": "black", "weight": 1 } }).addTo(map);

// cities
var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "black",
    //color: "#000",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.8
};
var cities = L.geoJSON.ajax("data/poleis.geojson", {
    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
//var cities = L.geoJSON(, { style: { "color": "red", "weight": 3 } }).addTo(map);


// layer control /////////////////////////////////////////////////////////////////
var baseMaps = {
    "OSM": osm
};

var overlayMaps = {
    "Primary roads": primary,
    "Trunk roads": trunk,
    "Motorways": motorway
};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
//var marker = L.marker([51.5, -0.09]).addTo(map);