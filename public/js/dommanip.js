// dommanip.js
function generate1() {
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("Oh wait.  Click here");
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
					var text = document.createTextNode("Here is some text to reward your efforts");
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

function addList() {
	var newItem = document.createElement("LI");
	var item = document.getElementById('add').value;
	var textnode = document.createTextNode(item);
	newItem.appendChild(textnode);

	var list = document.getElementById('list');
	list.insertBefore(newItem, list.childNodes[0]);
	document.getElementById('add').value = "";
}

function removeList() {
	var list = document.getElementById('list');
	while (list.hasChildNodes()) {
		list.removeChild(list.childNodes[0]);
	}
}