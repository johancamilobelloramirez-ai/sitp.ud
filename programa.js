var map = L.map('map').setView([4.6260975110593545, -74.15155844756721], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.6260975110593545, -74.15155844756721]).addTo(map);