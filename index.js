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
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

map.on("load", () => {
  $('input[type=radio]').change(function() {
    if ($(this).val() == 'all') {
      map.setFilter('survey-bridges', null);
    } else {
      map.setFilter('survey-bridges', ["all", ["match", ["get", "Stage"], [$(this).val()], true, false]]);
    }
  });

  // if the id 'sat-view' is checked, show the satellite layer if unchecked hide satellite layer

  $('#sat-view').change(function() {
    if ($(this).is(':checked')) {
      map.setLayoutProperty('satellite', 'visibility', 'visible');
    } else {
      map.setLayoutProperty('satellite', 'visibility', 'none');
    }
  });
  // if 3d-view is checked angle map to 33 degrees if unchecked angle map to 0 degrees
  $('#3d-view').change(function() {
    if ($(this).is(':checked')) {
      map.easeTo({
        pitch: 33,
        duration: 1000,
      });
    } else {
      map.easeTo({
        pitch: 0,
        duration: 1000,
      });
    }
  });

  map.on("click", "survey-bridges", (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "Stage: " + e.features[0].properties["Stage"] +
        "<br>Bridge Name: " + e.features[0].properties["Bridge Name"] +
        "<br>Location: " + e.features[0].properties["latitude"] + ", " + e.features[0].properties["longitude"] +
        "<br>District: " + e.features[0].properties["Level 2 Government"] + 
        "<br>Village: " + e.features[0].properties["Level 4 Government"] 
        )
      .addTo(map);
  });

  map.on("mouseenter", ["survey-bridges"], () => {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change the cursor back to a pointer
  // when it leaves the states layer.
  map.on("mouseleave", ["survey-bridges"], () => {
    map.getCanvas().style.cursor = "";
  });
  "Bridge Name"
"Bridge Type"
"Span (m)"
});

// District, site name, village name would be great.  
