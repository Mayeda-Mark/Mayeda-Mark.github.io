//localstorage.js

localStorage.setItem("card", "a card");
//localStorage.setItem("name", "");

function yourCard() {
	localStorage.setItem("card", document.getElementById('card').value);
	document.getElementById('yourCard').innerHTML = "Your card is the " + localStorage.getItem("card");
}

function setName() {
	localStorage.setItem("name", document.getElementById('name').value);
	document.getElementById('nameResult').innerHTML = "You name has been recorded.  Refresh page to see it."
}

function sayName() {
	if (localStorage.name != NULL) {
		document.getElementById('nameResult').innerHTML = "Hello " + localStorage.getItem("name");
	}
}