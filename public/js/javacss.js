//javacss.js

function sentenceBackground() {
	var select_id = "select1";
	var select = "document.getElementById(select_id);"

	var class_name = "class1";
	//var classes = document.getElementsByClassName(class_name);

	var color = document.getElementById('select1').value;
	for (var i = 0; i < document.getElementsByClassName(class_name).length; i++) {
		document.getElementsByClassName(class_name)[i].style.backgroundColor =  color ;
	}
}

function numbersBackground() {
	var select_id = "select2";
	var select = "document.getElementById(select_id);"

	var class_name = "class2";
	//var classes = document.getElementsByClassName(class_name);

	var color = document.getElementById('select2').value;
	for (var i = 0; i < document.getElementsByClassName(class_name).length; i++) {
		document.getElementsByClassName(class_name)[i].style.backgroundColor =  color ;
	}
}