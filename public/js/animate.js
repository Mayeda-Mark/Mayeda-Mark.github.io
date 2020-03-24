//animate.js

var isRunning = false;

function startStop() {
	if (isRunning) {
		document.getElementById('animation').style.animationPlayState = "paused";
		isRunning = false;
	}
	else {
		document.getElementById('animation').style.animationPlayState = "running";
		isRunning = true;
	}
}