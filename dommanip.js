// dommanip.js
function generate1() {
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("Oh wait.  Click here");
	//btn.onclick = generate2();
	btn.onclick = function() {
		var btn2 = document.createElement("BUTTON");
		var t = document.createTextNode("No, no, no. Click Here");
		btn2.onclick = function() {
			var btn3 = document.createElement("BUTTON");
			var t = document.createTextNode("Shoot! No, click this one");
			btn3.onclick = function() {
				var btn4 = document.createElement("BUTTON");
				var t = document.createTextNode("I'm sorry. Click this one");
				btn4.onclick = function() {
					var para = document.createElement("P");
					var text = document.createTextNode("Here is some text to reward your effores");
					para.appendChild(text);
					document.getElementById('fill5').appendChild(para);
					} // click 5
				btn4.appendChild(t);
				document.getElementById('fill4').appendChild(btn4);
				} // click 4
			btn3.appendChild(t);
			document.getElementById('fill3').appendChild(btn3);
			} // click 3
		btn2.appendChild(t);
		document.getElementById('fill2').appendChild(btn2);
		} // click 2
	btn.appendChild(t);
	document.getElementById('fill1').appendChild(btn);
}

/*function generate2() {
	var btn2 = document.createElement("BUTTON");
	var t = document.createTextNode("No, no, no. Click Here");
	btn2.onclick = generate3();
	btn2.appendChild(t);
	document.getElementById('fill2').appendChild(btn2);
}

function generate3() {
	var btn3 = document.createElement("BUTTON");
	var t = document.createTextNode("Shoot! No, click this one");
	btn3.onclick = generate4();
	btn3.appendChild(t);
	document.getElementById('fill3').appendChild(btn3);
}

function generate4() {
	var btn4 = document.createElement("BUTTON");
	var t = document.createTextNode("I'm sorry. Click this one");
	btn4.onclick = generate5();
	btn4.appendChild(t);
	document.getElementById('fill4').appendChild(btn4);
}

function generate5() {
	var para = document.createElement("P");
	var text = document.createTextNode("Here is some text to reward your effores");
	para.appendChild(text);
	document.getElementById('fill5').appendChild(para);
}
*/