//animate.js

var isRunning = false;
var animation = document.querySelector(".animation");

function startStop() {
	if (isRunning) {
		animation.style.animationPlayState = "paused";
	}
	else {
		animation.style.animationPlayState = "running";
	}
}