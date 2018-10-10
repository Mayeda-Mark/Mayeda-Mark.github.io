//loops.js

function multTable(error, multTable) {
	var num = document.getElementById("num").value;
	var txt = "<table style='border: 1px solid black';> <tr> <th>#</th>";
	if (verify(num)) {
		document.getElementById(error).style.visibility = 'visible';
		txt = "";
		document.getElementById(multTable).innerHTML = txt;

	}
	else {
		document.getElementById(error).style.visibility = 'hidden';
		for (var i = 1; i <= num; i++) {
				txt += "<th>" + i + "</th>";
			}
		txt += "</tr>";
		for (var row = 1; row <= num; row++) {
			txt += "<tr><th>" + row + "</th>";
			for (var col = 1; col <= num; col++) {
				var product = (row * col);
				txt += "<td>" + product + "</td>";
			}
			txt +="</tr>";
		}
		document.getElementById(multTable).innerHTML = txt;
	}
}

function verify(value) {
	if (value < 0 || !value.search((/^[A-Za-z]+$/))) {
		return true;
	}
	else
		return false;
}

function multRange(error, multRange) {
	var number = document.getElementById('multNum').value;
	var range = document.getElementById('multRange').value;
	var nums = [];
	var mults = [];
	var txt = "<table style='border: 1px solid black';> <tr>";
	if (verify(range)) {
		document.getElementById(error).style.visibility = 'visible';
		txt = "";
		document.getElementById(multRange).innerHTML = txt;
	}
	else {
		document.getElementById(error).style.visibility = 'hidden';

		for (var i = 0; i < range; i++) {
			nums[i] = i + 1;
			mults[i] = nums[i] * number;
		}
		for (var i = 0; i < range; i++) {
			txt += "<th>" + nums[i] + "</th>";
		}
		txt += "</tr><tr>";
		for (var i = 0; i < range; i++) {
			txt += "<td>" + mults[i] + "</td>";
		}
		txt += "</tr>";
		document.getElementById(multRange).innerHTML = txt;
	}
}
