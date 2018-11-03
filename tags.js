//tags.js
function drawSmiley() {

	var canvas = document.getElementById("theCanvas");
	var ctx = canvas.getContext("2d");
	var eyeRadius = 10;
  	var centerX = canvas.width / 2;
  	var centerY = canvas.height / 2;
	var eyeXOffset = 25;
	var eyeYOffset = 20;

	//ctx.fillStyle = "blue";
	//ctx.fillRect(0, 0, 200, 150);

	ctx.beginPath();
	var lEyeX = centerX - eyeXOffset;
	var lEyeY = centerY - eyeYOffset;
	ctx.arc(lEyeX, lEyeY, eyeRadius, 0, 2 * Math.PI, false);
	var rEyeX = centerX + eyeXOffset;
	ctx.arc(rEyeX, lEyeY, eyeRadius, 0, 2 * Math.PI, false);
	ctx.fillStyle = "yellow";
	ctx.fill();

	ctx.beginPath();
	ctx.arc(centerX, centerY, 50, 0, Math.PI, false)
	ctx.strokeStyle = "yellow";
	ctx.lineWidth = 10;
	ctx.stroke();
}