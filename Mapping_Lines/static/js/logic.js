// Create our map, giving it the streetmap and earthquakes layers to display on load
var map = L.map("mapid").setView([37.6213, -122.3790], 5);
// Add a tile layer
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790], // SFO Airport (San Francisco)
  [30.1975, -97.6664],  // AUS Austin-Bergstrom Int'l Airport
  [35.0734, -77.6069],  // Coastal Carolina Regional Airport
  [40.6413, -73.7781],  // JFK Int'l Airport  
  [43.6777, -79.6248]   // YYZ Toronto Pearson Int'l Airport
];

// Create a polyline using the line coordinates and make the line blue.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '20,10',
  lineJoin: 'round'
}).addTo(map);

// Add console.log to check to see if our code is working.
console.log("working");









// Add console.log to check to see if our code is working.
console.log("working");