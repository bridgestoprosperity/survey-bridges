mapboxgl.accessToken =
  "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2w5bjYzdXlyMDNyOTNycDh4YnB1dWV5eiJ9.vhIIq0L5So522RkERq7MNQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/highestroad/clbpcmf7n001915mm30k360wh", // style URL
  center: [29.736, -1.975], // starting position [lng, lat]
  zoom: 8.1, // starting zoom
  pitch: 0,
  hash: true,
});
8.1/-2.264/29.736/-35.2

map.on("load", () => {
  $('input[type=radio]').change(function() {
    console.log($(this).val() + ' selected');
    map.setLayoutProperty('otherbridges', 'visibility', $(this).val());
  });

  $('#layer-visibility').change(function() {
    if ($(this).is(':checked')) {
      // Show the layer
      map.setLayoutProperty('satellite', 'visibility', 'visible');
    } else {
      // Hide the layer
      map.setLayoutProperty('satellite', 'visibility', 'none');
    }
  });

  map.on("click", "elmabridges", (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("Bridge Name: " + e.features[0].properties["Bridge Name"] + "<br>Bridge Type: " + e.features[0].properties["Bridge Type"] + "<br>Bridge Span: " + e.features[0].properties["Span (m)"] + " meters" + "<br>Completion Date: " + e.features[0].properties["Close Date"])
      .addTo(map);
  });
  map.on("click", "otherbridges", (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML("Bridge Name: " + e.features[0].properties["Bridge Name"] + "<br>Bridge Type: " + e.features[0].properties["Bridge Type"] + "<br>Bridge Span: " + e.features[0].properties["Span (m)"] + " meters")
      .addTo(map);
  });

  // Change the cursor to a pointer when
  // the mouse is over the states layer.
  map.on("mouseenter", ["otherbridges", "elmabridges"], () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change the cursor back to a pointer
  // when it leaves the states layer.
  map.on("mouseleave", ["otherbridges", "elmabridges"], () => {
    map.getCanvas().style.cursor = "";
  });
  "Bridge Name"
"Bridge Type"
"Span (m)"
});
