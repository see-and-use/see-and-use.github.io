function initialize() {
  var myLatlng = new google.maps.LatLng(50.490208, 30.465382);
  var mapOptions = {
    zoom: 11,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  var markers = [];
  var arr = [{a : 50.509908, b : 30.488503,title : 'Маршала Тимошенка, 7а'},{a : 50.458170, b : 30.405897,title : 'Прт.Победы, 97'}, {a : 50.516000, b : 30.462886,title : 'Полярная, 8'}];
  arr.forEach(function(el, i) {
  var myLatlng = new google.maps.LatLng(el.a, el.b);
  var options = {
    map: map,
    position: myLatlng,
    className: 'map-marker running',
    visible: true ,
    title: el.title
 
  }
  var marker = new google.maps.Marker(options);
  google.maps.event.addListener(marker, 'click', function() {
        map.panTo(myLatlng);
    });
  markers[i] = marker;
})
 
 
};
google.maps.event.addDomListener(window, 'load', initialize);