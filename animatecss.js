//animate.js

var isRunning = false;

function startStop() {
	document.getElementById('animate').style.animationPlayState = "running";
}

function delayPause() {
	document.getElementById('animate').style.animationPlayState = "paused";
}