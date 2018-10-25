//animate.js

var isRunning = false;

function startStop() {
	if (isRunning) {
		document.getElementbyId('animation').style.animationPlayState = "paused";
	}
	else {
		document.getElementbyId('animation').style.animationPlayState = "running";
	}
}