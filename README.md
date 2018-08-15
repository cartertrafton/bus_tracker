# MRTA Bus Tracker (WIP)
>MRTA Fixed Route Bus Tracking for HBSS: Created with JavaScript, HTML, and CSS.

## Background
This program is built for tracking bus movements along their fixed-routes for the MRTA.
It utilizes the [Leaflet JavaScript library](https://github.com/Leaflet/Leaflet)
for display and controls of the map. Before starting this project I did not know any HTML, CSS, or JavaScript, and have been teaching myself via free online courses and code practice sites.

## Current Build
![Current Build Screenshot (WIP)](https://i.imgur.com/6K9sdfF.png)

## Features
- [x] Collapsible table of bus route info
- [x] Map background
- [x] Map controls (zoom , scroll, etc)
- [ ] Real time updated table info
- [x] Bus routes available on map
- [ ] Route highlighting when selected
- [ ] Live bus location tracking


## Data Formatting
Each bus will be handled as an object by the main program, and it will call a function that gets the data from either a webscraping script or an API. From there the main program will build and display an HTML table onto the site overlaying the map. Each of the buses info will follow the format of:

```
"V####" : {
  "segment" : "S####",
  "start_time" :  "####A",
  "end_time" : "####P",
  "last_announce" : "####A",
  "battery_level" : "##%",
  "next_stop" : "####A-ID_NUMBER-STOP_NAME",
  "total_stop" : "###",
  "stop_announced" : "##",
  "accuracy_percentage" : "##",
  "device_time_onOff" : "#/##/2018 ####A",
  "battery_levels_onOff" :  "##%",
  "segment_time_onOff" : "####A"
}
```

Each route on the map is formatted as an object as well. Each object will contain an array GPS coordinates, that take the form of a smaller 2-length array:

```
busID : {
  "color": gray,
  "route": 
   [[-42.5, 71.8],
  	[-42.6, 71.9],
  	[-42.7, 72.0],
  	[-42.8, 72.1],
  	[-42.9, 72.2],
  	[-43.0, 72.3]]
}
```


## Meta
@cartertrafton - cartertrafton@gmail.com - [https://github.com/cartertrafton/bus_tracker](https://github.com/cartertrafton/)

### Timeline
- [x] Week 1: Learning HTML & CSS
- [x] Week 2: Learning basic JavaScript & set up initial site test
- [x] Week 3: Learning advanced JavaScript & adding features
- [x] Week 4: Continuing advanced JavaScript & learning Leaflet
library
- [ ] **Week 5: Implementing features (live tracking, bus routes, etc)**
- [ ] Week 6: Project Finish - Goal

### Resources
Becasuse I did not know any JavaScript, HTML, or CSS, I have used resources such as:
- [Free Code Camp](https://learn.freecodecamp.org): for basic HTML, CSS, and JS.
- [Rithm](https://www.rithmschool.com/courses): for more advanced JavaScript.
- [W3Schools](https://www.w3schools.com/default.asp): for tons of CSS and HTML reference and tutorials.
- [CodeAcademy](https://www.codecademy.com): for the git and command line tutorials.
- [Leaflet JS Library](https://leafletjs.com/reference-1.3.2.html): for mapping, geolocation, GPS markers, and route mapping

:~)
