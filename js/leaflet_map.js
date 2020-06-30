var map = L.map('map', {
    renderer: L.canvas()
}).setView([38.02, 23.74], 7);


// basemaps
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// map layers
var primary = L.geoJSON(roads_primary, { style: { "color": "green", "weight": 1 } }).addTo(map);
var trunk = L.geoJSON(roads_trunk, { style: { "color": "orange", "weight": 2 } }).addTo(map);
var motorway = L.geoJSON(roads_motorway, { style: { "color": "red", "weight": 3 } }).addTo(map);


// layer control
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