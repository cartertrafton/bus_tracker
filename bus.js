
var mymap = L.map('mapid').setView([42.630029,-71.353681], 13);
var busIcon = L.icon({
    iconUrl: 'bus-icon.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
	
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

L.marker([42.630, -71.353],{icon: busIcon}).addTo(mymap);

// create a red polyline from an array of LatLng points
var routeName = [
	[42.630, -71.353],
	[42.620, -71.4],
	[42.625, -71.49],
	[42.63, -71.5],
	[42.627, -71.4],
	[42.631, -71.357]
];
var polyline = L.polyline(routeName, {color: 'green'}).addTo(mymap);
// zoom the map to the polyline
//mymap.fitBounds(polyline.getBounds());

