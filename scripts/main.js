var rdm_lat = 36.800024;
var rdm_lon = -3.776859;

var a7_lat = 36.762506;
var a7_lon = -3.853557;

function createMap(elem, mapType) {
  var gmap = new GMaps({
    div: "#" + elem.id,
    lat: rdm_lat,
    lng: rdm_lon,
    zoom: 17,
    mapType: mapType
  });

  gmap.addMarker({
    lat: rdm_lat,
    lng: rdm_lon,
    infoWindow: {
      content: "<p>Bis bald in <i>Rio de la Miel!</i></p>"
    }
  });

  return gmap;
}

$( document ).ready(
  function() {
    $("#main a[href^='http://']").attr("target","_blank");

    $("#map").each( function(idx, elem) {
      createMap(elem, "satellite");
    });

    $("#route").each( function(idx, elem) {
      var map = createMap(elem, "map");

      map.addMarker({
        lat: a7_lat,
        lng: a7_lon,
        infoWindow: {
          content: "<p>Hier von der A7 abfahren !</p>"
        }
      });

      map.drawRoute({
        origin: [a7_lat, a7_lon],
        destination: [rdm_lat, rdm_lon],
        travelMode: 'driving',
        strokeColor: '#dd20dd',
        strokeOpacity: 0.6,
        strokeWeight: 4
      });

      map.fitZoom();
    });
  }
);
