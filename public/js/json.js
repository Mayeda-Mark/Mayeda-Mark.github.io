//json.js

function Team(name, wins, losses){
	this.name = name;
	this.wins = wins;
	this.losses = losses;
}

var team1;
var myJSON;

function stringify() {
	var name = document.getElementById('name').value;
	var wins = document.getElementById('wins').value;
	var losses = document.getElementById('losses').value;
	var team1 = new Team(name, wins, losses);

	myJSON = JSON.stringify(team1);
	document.getElementById('stringifyOutput').innerHTML = myJSON +
	"<br><button onclick='parse();'>Click here to parse the JSON</button><div id='parseOutput'></div>";
}

function parse() {
	var name = document.getElementById('name').value;
	var wins = document.getElementById('wins').value;
	var losses = document.getElementById('losses').value;
	var team1 = new Team(name, wins, losses);
	myJSON = JSON.stringify(team1);
	var parse = JSON.parse(myJSON);
	document.getElementById('parseOutput').innerHTML = "The " + parse.name 
	+ " have a win/loss record of " + parse.wins + " win(s) and " + 
	parse.losses + " loss(es).";
}