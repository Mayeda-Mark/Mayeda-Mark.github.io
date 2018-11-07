//animate.js

var isRunning = false;

function startStop() {
	if (isRunning) {
		document.getElementById('animate').style.animationPlayState = "paused";
		isRunning = false;
	}
	else {
		document.getElementById('animate').style.animationPlayState = "running";
		isRunning = true;
	}
}