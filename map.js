$(function() {
  $("#stage").load('map.svg', function(response) {
    $(this).addClass("mapLoaded");
    if(!response) {
      alert("Map not loaded");
    }
  });
  
});