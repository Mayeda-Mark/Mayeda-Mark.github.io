//localstorage.js

localStorage.setItem("card", "a card");

function yourCard() {
	localStorage.setItem("card", document.getElementById('card').value);
	document.getElementById('yourCard').innerHTML = "Your card is the " + localStorage.getItem("card");
}