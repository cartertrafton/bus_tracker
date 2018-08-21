# MRTA Bus Tracker (WIP)
>MRTA Fixed Route Bus Tracking for HBSS: Created with JavaScript, HTML, and CSS.

## Background
This program is built for tracking bus movements along their fixed-routes for the MRTA.
It utilizes the [Leaflet JavaScript library](https://github.com/Leaflet/Leaflet)
for display and controls of the map. Before starting this project I did not know any HTML, CSS, or JavaScript, and have been teaching myself via free online courses and code practice sites.

## Current Build
![Current Build Screenshot (WIP)](https://i.imgur.com/K4XAA7J.png)

## Features
- [x] Collapsible table of bus route info
- [x] Map background
- [x] Map controls (zoom , scroll, etc)
- [x] Attach table values to easily assigned variables
- [x] Bus routes available on map
- [ ] Route highlighting when selected
- [ ] Live bus location tracking


## Data Formatting
Each bus will be handled as an object by the main program, and it will call a function that gets the data from either a web-scraping script or an API. From there the main program will build and display an HTML table onto the site overlaying the map. Each of the buses info will follow the format of an object with the keys being the relevant data, including ID number, route color, and GPS coordinates (in the form of a two-dimensional array):

```
{
    'busID' : '###',
    'segment' : 'S####',
    'start_time' :  '####A',
    'end_time' : '####P',
    'last_announce' : '####A',
    'battery_level' : '##%',
    'next_stop' : '####A-ID_NUMBER-STOP_NAME',
        'color' : 'gray',
    'route' :
      [[-42.5, 71.8],
       [-42.6, 71.9],
       [-42.7, 72.0],
       [-42.8, 72.1],
       [-42.9, 72.2],
       [-43.0, 72.3]]
}
```

## Meta
cartertrafton@gmail.com - [@cartertrafton](https://github.com/cartertrafton/)

### Timeline
- [x] Week 1: Learning HTML & CSS
- [x] Week 2: Learning basic JavaScript & set up initial site test
- [x] Week 3: Learning advanced JavaScript & adding features
- [x] Week 4: Continuing advanced JavaScript & learning Leaflet
library
- [x] Week 5: Implementing features
- [ ] **Week 6: Project Finish - Goal**

### Resources
Because I did not know any JavaScript, HTML, or CSS, I have used resources such as:
- [Free Code Camp](https://learn.freecodecamp.org): for basic HTML, CSS, and JS.
- [Rithm](https://www.rithmschool.com/courses): for more advanced JavaScript.
- [W3Schools](https://www.w3schools.com/default.asp): for tons of CSS and HTML reference and tutorials.
- [CodeAcademy](https://www.codecademy.com): for the git and command line tutorials.
- [Leaflet JS Library](https://leafletjs.com/reference-1.3.2.html): for mapping, geolocation, GPS markers, and route mapping.

:~)
