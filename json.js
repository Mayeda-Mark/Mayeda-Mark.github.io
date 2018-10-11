//json.js

function Team(name, wins, losses){
	this.name = name;
	this.wins = wins;
	this.losses = losses;
}

function stringify() {
	var name = document.getElementById('name').value;
	var wins = document.getElementById('wins').value;
	var losses = document.getElementById('losses').value;
	var team1 = new Team(name, wins, losses);

	var myJSON = JSON.stringify(team1);
	document.getElementById('stringifyOutput').innerHTML = myJSON;
}