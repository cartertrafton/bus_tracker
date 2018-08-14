// Temp data for tbale building until the web-scraping is done
data = {
	  "V1111" : {
	    "segment" : "S1111",
	    "start_time" :  "1111A",
	    "end_time" : "1111P",
	    "last_announce" : "1111A",
	    "battery_level" : "11%",
	    "next_stop" : "1111A-ID_NUMBER-STOP_NAME",
	    "total_stop" : "111",
	    "stop_announced" : "11",
	    "accuracy_percentage" : "11",
	    "device_time_onOff" : "#/##/2018 1111A",
	    "battery_levels_onOff" :  "11%",
	    "segment_time_onOff" : "1111A"
		},
	  "V2222" : {
	    "segment" : "S2222",
	    "start_time" :  "2222A",
	    "end_time" : "2222P",
	    "last_announce" : "2222A",
	    "battery_level" : "22%",
	    "next_stop" : "2222A-ID_NUMBER-STOP_NAME",
	    "total_stop" : "222",
	    "stop_announced" : "22",
	    "accuracy_percentage" : "22",
	    "device_time_onOff" : "#/##/2018 2222A",
	    "battery_levels_onOff" :  "22%",
	    "segment_time_onOff" : "2222A"
	  },
	  "V3333" : {
	    "segment" : "S3333",
	    "start_time" :  "3333A",
	    "end_time" : "3333P",
	    "last_announce" : "3333A",
	    "battery_level" : "33%",
	    "next_stop" : "3333A-ID_NUMBER-STOP_NAME",
	    "total_stop" : "333",
	    "stop_announced" : "33",
	    "accuracy_percentage" : "33",
	    "device_time_onOff" : "#/##/2018 3333A",
	    "battery_levels_onOff" :  "33%",
	    "segment_time_onOff" : "3333A"
	  }
}


//from Online Example: TODO - Convert and make sense of this
function makeTable() {
	var data =

	// EXTRACT VALUE FOR HTML HEADER.
	// ('Book ID', 'Book Name', 'Category' and 'Price')
	var col = [];
	for (var i = 0; i < myBuses.length; i++) {
		for (var key in myBuses[i]) {
			if (col.indexOf(key) === -1) {
				col.push(key);
			}
		}
	}

	// CREATE DYNAMIC TABLE.
	var table = document.createElement("table");

	// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
	var tr = table.insertRow(-1);                   // TABLE ROW.

	for (var i = 0; i < col.length; i++) {
		var th = document.createElement("th");      // TABLE HEADER.
		th.innerHTML = col[i];
		tr.appendChild(th);
	}

	// ADD JSON DATA TO THE TABLE AS ROWS.
	for (var i = 0; i < myBuses.length; i++) {
		tr = table.insertRow(-1);

		for (var j = 0; j < col.length; j++) {
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = myBuses[i][col[j]];
		}
	}

	// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
	var divContainer = document.getElementById("showData");
	divContainer.innerHTML = "";
	divContainer.appendChild(table);
}

// This function gets the data from the existing site and saves them for use here
function getValues() {
}

// This function updates the values that are being shown in the map
function updateValues() {
}

//getValues();
//makeTable();
