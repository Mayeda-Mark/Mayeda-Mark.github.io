var time = 0;
var running = 0;
var lapNum = 0

function startPause(){
	if(running == 0){
		running = 1;
		increment();
		document.getElementById("startPause").innerHTML = "Stop";
	}else{
		running = 0;
		document.getElementById("startPause").innerHTML = "Resume";
	}
};

function reset(){
	running = 0;
	time = 0;
	document.getElementById("time").innerHTML = "00:00:00";
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById('lap').innerHTML = "";
	lapNum = 0;
};

function increment(){
	if(running == 1){
		setTimeout(function(){
			time++;
			var mins = Math.floor(time / 10 / 60);
			if(mins <= 9){
				mins = "0" + mins;
			}
			var secs = Math.floor(time / 10);
			if(secs <= 9){
				secs = "0" + secs;
			}
			var tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			document.getElementById("time").innerHTML = mins + ":" + secs + ":" + tenths;
			increment();
		}, 100);
	}
};

function lap() {
	var existingLap = document.getElementById('lap').innerHTML;
	lapNum ++;
	existingLap += "Lap " + lapNum + ": " + document.getElementById('time').innerHTML + "<br>";
	document.getElementById('lap').innerHTML = existingLap;
}