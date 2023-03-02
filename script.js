<!DOCTYPE html>
<html>
  <head>
    <title>Interactive Map</title>
    <style>
      /* Set the size of the div element that contains the map */
      #map {
        height: 400px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
       }
    </style>
  </head>
  <body>
    <!-- The div element for the map -->
    <div id="map"></div>
    <!-- Replace YOUR_API_KEY with your Google Maps API key -->
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script>
      // Initialize and add the map
      function initMap() {
        // The location of the center of the map
        var center = {lat: 37.0902, lng: -95.7129};
        // The map options
        var options = {
          zoom: 4,
          center: center
        }
        // Create the map
        var map = new google.maps.Map(document.getElementById('map'), options);
      }
    </script>
    <!-- Call the initMap function when the page has finished loading -->
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
  </body>
</html>
