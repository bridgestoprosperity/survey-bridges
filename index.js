mapboxgl.accessToken =
  "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2w5bjYzdXlyMDNyOTNycDh4YnB1dWV5eiJ9.vhIIq0L5So522RkERq7MNQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/clbxb5afl000314qqmhh54sm4", // style URL
  center: [29.771, -2.182], // starting position [lng, lat]
  zoom: 8.13, // starting zoom
  pitch: 33,
  // hash: true,
});
