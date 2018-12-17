//journal.js

localStorage.setItem("lessonNum", 0);
localStorage.setItem("skillNum", 0);

function lessons() {
	switch(localStorage.getItem("lessonNum")) {
		case "0":
			document.getElementById('lessonFill').innerHTML = "Various new tools with CSS and JS:<br>Each of the weekly topics that we had to cover for this class proved to be extremely valuable and each have helped me to know new and more efficient ways to handle various problems.";
			localStorage.setItem("lessonNum", "1");
			break;
		case "1":
			document.getElementById('lessonFill').innerHTML = "Professional CSS methods:<br>Making a web page or web application look and feel like a professional product has been something that I haven't really understood how to do until this class and I htink that the final project helped me to understand that quite a bit better.";
			localStorage.setItem("lessonNum", "2");
			break;
		case "2":
			document.getElementById('lessonFill').innerHTML = "Transitions/transforms:<br>Attaching transitions and transforms to CSS elements to give a more professional and smooth feel to a web application is really cool.";
			localStorage.setItem("lessonNum", "0");
			break;
	}
}

function skills() {
	switch(localStorage.getItem("skillNum")) {
		case "0":
			document.getElementById('skillFill').innerHTML = "Time management:<br>Time management is absolutely critical to success in this class and is a skill which I expect that I will need throughout my career.  This class really forced me to budget my time wisely in order to get everything that I wanted to do done.";
			localStorage.setItem("skillNum", "1");
			break;
		case "1":
			document.getElementById('skillFill').innerHTML = "Problem recognition:<br>Recognizing when there is an issue with my application and when I need help early is extremely important to successful programming and in an \"on your own\" sort of environment like this class, recognizing when you need help is crucial to time management and hterefore, successful programming.";
			localStorage.setItem("skillNum", "2");
			break;
		case "2":
			document.getElementById('skillFill').innerHTML = "Resource finding:<br>Being able to find good resources is extremely important to successful programming because there is literally no way to know everything there is to know about anything you could concievable want to do.";
			localStorage.setItem("skillNum", "3");
			break;
		case "3":
			document.getElementById('skillFill').innerHTML = "Resource recognition:<br>There are a lot of resources on the internet and not all of them are accurate, easy to understand or worthwhile.  Being able to recognize what is and is not a good resource quickly is an invaluable skill which I gained in this class.";
			localStorage.setItem("skillNum", "0");
			break;
	}
}