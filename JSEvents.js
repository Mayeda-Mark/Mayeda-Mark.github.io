//JSEvents.js

function something(){
	document.getElementById('onload').innerHTML = "You wouldn't know this since you weren't here, but this message was generated when the page loaded.";
}

function touchStart(){
	document.getElementById('tap').innerHTML = "You just touched that!";
}

function touchEnd(){
	document.getElementById('tap').innerHTML = "You just stopped touching it.  Now go wash your hands...";
}

function clickText() {
	document.getElementById("clickReturn").innerHTML = "You just clicked that!";
}

function fontColor() {
	var select_id = "select1";
	var fill_id = "fontFill";
	var select = "document.getElementById(select_id);"
	var color = document.getElementById('select1').value;
	document.getElementById(fill_id).style.color =  color;
}