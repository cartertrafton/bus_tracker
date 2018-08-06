# MRTA Bus Tracker (WIP)
>MRTA Fixed Route Bus Tracking for HBSS: Created with JavaScript, HTML, and CSS.

## Background
This program is built for tracking bus movements along their fixed-routes for the MRTA.
It utilizes the [Leaflet JavaScript library](https://github.com/Leaflet/Leaflet) 
for display and controls of the 
map. 

## Features
- [x] Collapsible table of info on routes
- [x] Map
- [ ] Live bus tracking
- [ ] Real time updated table info
- [ ] Route highlighting when selected
- [x] Map controls (zoom , scroll, etc)

## Data Formatting 
Each bus will be handled as an object by the main program, it will call to a JSON file containing the data for all currently running bus routes. That file will be updated via a web-scraping script or via information sent by the original API of the site. From there the main program will build and display an HTML table onto the site overlaying the map. Each of the buses info will follow the format of:

```
busName {
  Segment : S#### (V####);
  Start Time :  ####A;
  End Time : ####P;
  Last Announce : ####A;
  Battery Level : ##%;
  Next Stop : ####A-ID_NUMBER-STOP_NAME;
  Total Stop : ###;
  Stop Announced : ##;
  Accuracy Percentage: ##;
  Device Time On/Off : #/##/2018 ####A;
  Battery Levels(%)(On/Off):  ##%;
  Segment Time (On/Off) : ####A;
}
```

## Meta
@cartertrafton - cartertrafton@gmail.com - [https://github.com/cartertrafton/bus_tracker](https://github.com/cartertrafton/)

### Timeline
- [x] Week 1: Learning HTML & CSS 
- [x] Week 2: Learning basic JavaScript & set up initial site test
- [x] Week 3: Learning advanced JavaScript & adding features
- [ ] **Week 4: Continuing advanced JavaScript & learning Leaflet library**
- [ ] Week 5: React.js
- [ ] Week 6: Programming & organization
- [ ] Week 7: Project Finish - Goal

### Resources and Process
Beginning this project I did not know any JavaScript, HTML, or CSS. I have used 
resources such as: 
- [Free Code Camp](https://learn.freecodecamp.org): for basic HTML, CSS, and JS.
- [Rithm](https://www.rithmschool.com/courses): for more advanced JavaScript.
- [W3Schools](https://www.w3schools.com/default.asp): for tons of CSS and HTML reference and tutorials.
- [CodeAcademy](https://www.codecademy.com): for the git and command line tutorials.


