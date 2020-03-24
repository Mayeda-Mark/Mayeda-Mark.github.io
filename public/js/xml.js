// xml.js

function request() {
	var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQyYzAzOGNkLWE5MjgtNDBhZi1hMDQ0LWE1NTllZDc5MjEwYSIsImlhdCI6MTU0MjIzNzAzMywic3ViIjoiZGV2ZWxvcGVyLzJiYmRmNjI5LTU3NWMtYzM5Ni1kYTZmLTA2YTNjYzJhMWMwMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTIuMTY5LjMuMTcyIl0sInR5cGUiOiJjbGllbnQifV19.4EhKSWb5hSoK5L_sjGaEwekigX_2NHvivwZ2S4rqkTV2G5SoOrxgKbbMDR6oKN8Yp8sku0DbW-bv7yvD6Zqpfg";
	var xhttp = new XMLHttpRequest();
	var url = 'https://ghibliapi.herokuapp.com/species';
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var myResponse = JSON.parse(this.response);
			var objectKeys = Object.keys(myResponse);
			console.log('objectKeys: ', objectKeys);
			var toWrite = "<br>";
			for (var i = 0; i < objectKeys.length; i++) {
				console.log("object number: " + i);
				toWrite += (myResponse[i].name + "<br>");
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
