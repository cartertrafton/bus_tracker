// Sets up the map
var mymap = L.map('mapid').setView([42.630029,-71.353681], 13);

//Customize icon
var busIcon = L.icon({
    iconUrl: 'bus-icon.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [25, 0] // point from which the popup should open relative to the iconAnchor
});

// Temp data for bus routes
// Each route has a color (for changing when selecting) and a route of GPS locations
var data = {
  bus0 : {
    "color": 'gray',
    "route": [
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
    	[42.62974, -71.35503]
    ],
  },
  bus1 : {
    "color": 'blue',
    "route": [
      [42.6301252,	-71.3486881],
      [42.6284438,	-71.3480659],
      [42.6285938,	-71.3472183],
      [42.6287359,	-71.3463171],
      [42.6274571,	-71.3458772],
      [42.6279781,	-71.3441498],
      [42.6291542,	-71.3445146],
      [42.6314513,	-71.3454051],
      [42.6336219,	-71.3463600],
      [42.6335904,	-71.3473470],
      [42.6323117,	-71.3467462],
      [42.6320196,	-71.3475616],
      [42.6308435,	-71.3471003],
      [42.6303857,	-71.3480873],
      [42.6334088,	-71.3491387]
    ]
  },
  bus2 : {
    "color": 'green',
    "route": [
      [42.6295578,	-71.3537991],
      [42.6297315,	-71.3550222],
      [42.6269213,	-71.3577902],
      [42.6267160,	-71.3581550],
      [42.6277738,	-71.3590133],
      [42.6281054,	-71.3600647],
      [42.6274581,	-71.3630259],
      [42.6277580,	-71.3669741],
      [42.6268265,	-71.3690769],
      [42.6256898,	-71.3677680],
      [42.6247740,	-71.3670063],
      [42.6237951,	-71.3669312]
    ]
  }
}




// Leaflet pre-written code for setting up map controls (zoom, scroll, etc)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

// This functions places a bus icon on the map
// Passes bus name, and generates an icon at the last GPS location
function makeIcon(bus){
	var lastCoord = bus.route[data.route.length - 1];
	L.marker(lastCoord,{icon: busIcon}).addTo(mymap);
}

// This function places a route on the map
// Passes bus name, and generates a poly-line along the route
function makeRoute(bus, routeColor) {
	var polyline = L.polyline(bus.route, {color: bus.color}).addTo(mymap);
}

// This function changes the color of the bus it is passed
function highlightRoute() {
}

// This function resets the color of the highlighted route back to gray
function clearRoute() {
}

//Testing Environment
makeRoute(data.bus0, data.bus0);
makeIcon(data.bus0);

makeRoute(data.bus1, data.bus1);
makeIcon(data.bus1);

makeRoute(data.bus2.route, data.bus2);
makeIcon(data.bus2);
