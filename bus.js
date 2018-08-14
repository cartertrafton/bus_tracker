
var mymap = L.map('mapid').setView([42.630029,-71.353681], 13);
var busIcon = L.icon({
    iconUrl: 'bus-icon.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var route = [
	[42.62978, -71.35376],
	[42.62949, -71.34976],
	[42.63178, -71.34461],
	[42.63105, -71.34379],
	[42.63186, -71.34274],
	[42.63224, -71.34149],
	[42.63296, -71.34162],
	[42.63282, -71.34212],
	[42.63426, -71.34259],
	[42.63371, -71.34559],
	[42.63344, -71.34907],
	[42.63606, -71.34967],
	[42.63536, -71.35282],
	[42.63484, -71.35574],
	[42.63290, -71.35546],
	[42.63189, -71.35484],
	[42.63083, -71.35512],
	[42.62974, -71.35503]];


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);


function makeIcon(route){
	var lastCoord = route[route.length - 1];
	L.marker(lastCoord,{icon: busIcon}).addTo(mymap);
}

function makeRoute(route) {
	var polyline = L.polyline(route, {color: 'green'}).addTo(mymap);
}

function highlightRoute() {
}

function clearRoute() {
}


makeRoute(route);
makeIcon(route);