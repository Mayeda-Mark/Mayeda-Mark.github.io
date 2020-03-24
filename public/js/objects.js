//objects.js

function Team(name, wins, losses) {
	this.name = name;
	this.wins = wins;
	this.losses = losses;
}
Team.prototype.players = 12;

function createTeam() {
	var name = document.getElementById('name').value;
	var wins = document.getElementById('wins').value;
	var losses = document.getElementById('losses').value;
	var team1 = new Team(name, wins, losses);
	var txt = "The " + team1.name + " has a win/loss record of "
	+ team1.wins + "/" + team1.losses;
	//document.getElementById(name).value = "";
	//document.getElementById(wins).value = "";
	//document.getElementById(losses).value = "";
	document.getElementById('display').innerHTML = txt;
}
