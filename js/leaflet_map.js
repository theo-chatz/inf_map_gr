var map = L.map('map', {
    renderer: L.canvas()
}).setView([38.02, 23.74], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.geoJSON(roads_motorway).addTo(map);
L.geoJSON(roads_trunk).addTo(map);
L.geoJSON(roads_primary).addTo(map);

//var marker = L.marker([51.5, -0.09]).addTo(map);