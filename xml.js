// xml.js

function request() {
	var xhttp = new XMLHttpRequest();
	var url = 'https://api.clashroyale.com/v1/cards';
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var myResponse = JSON.parse(this.response);
			var objectKeys = Object.keys(myResponse);
			console.log('objectKeys: ', objectKeys);
			var toWrite = "<br>";
			for (var i = 0; i < objectKeys.length; i++) {
				console.log("object number: " + i);
				toWrite += (myResponse[i].name + "<br>")
			}
			document.getElementById("text").innerHTML = toWrite;
		}
		else {
			document.getElementById("text").innerHTML = "File not found";
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}