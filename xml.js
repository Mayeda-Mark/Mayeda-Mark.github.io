// xml.js

function request() {
	var xhttp = new XMLHttpRequest();
	xttp.onreadystatechange = function() {
		if(this.readyState ==4 && this.status == 200) {
			document.getElementById("text").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "test.txt", true);
	xhttp.send();
}