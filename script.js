const startButton = document.getElementById('startBtn');
var quesEl = document.getElementById('qBlock');
let shuffledQues; 
var quesCount = 0;
var score = 0;
var selectedAns = "";
var highScoreStorage = [];
var timer = 15;
var finalScore = 0;
var interval = 0;
var ansButton0 = document.getElementById("ansBtn0");
var ansButton1 = document.getElementById("ansBtn1");
var ansButton2 = document.getElementById("ansBtn2");
var ansButton3 = document.getElementById("ansBtn3");


startButton.addEventListener('click', start);


document.getElementById("ansBtn0").addEventListener("click", function () {
	selectedAns = shuffledQues[quesCount].answer[0];
	correctAns();
});

document.getElementById("ansBtn1").addEventListener("click", function () {
	selectedAns = shuffledQues[quesCount].answer[1];
	correctAns();
});

document.getElementById("ansBtn2").addEventListener("click", function () {
	selectedAns = shuffledQues[quesCount].answer[2];
	correctAns();
});

document.getElementById("ansBtn3").addEventListener("click", function () {
	selectedAns = shuffledQues[quesCount].answer[3];
	correctAns();
});


function start(){
		$('#instructions').hide();
		toggleHide();
		shuffledQues = quizQuestions.sort(() => Math.random() - .5);
		score = 0;
		quesCount = 0;
		finalScore = 0;
		interval = setInterval(function(){
			if (timer > 0 && quesCount < quizQuestions.length) {
			document.getElementById('count').innerHTML=timer;
			timer--;
			showQues();
		} 
		else {
		document.getElementById('count').innerHTML = 'Done';
		calcScore();
		return;
		};
	}, 1000);
}

function showQues() {
	selectedAns = "";
	ansButton0 = "";
	ansButton1 = "";
	ansButton2 = "";
	ansButton3 = "";

	quesEl.innerText = quizQuestions[quesCount].question;

	document.getElementById("ansBtn0").innerText =
		shuffledQues[quesCount].answer[0];
	document.getElementById("ansBtn1").innerText =
		shuffledQues[quesCount].answer[1];
	document.getElementById("ansBtn2").innerText =
		shuffledQues[quesCount].answer[2];
	document.getElementById("ansBtn3").innerText =
		shuffledQues[quesCount].answer[3];
}

function correctAns(){
		if (selectedAns === shuffledQues[quesCount].correct) {
				score = score + 10;
				timer = timer + 10;
			} else {
				score = score - 10;
				timer = timer - 10;
			}
		quesCount++;
		showQues();
}

function calcScore(){
	finalScore = score + timer; 
	document.getElementById('count').innerHTML = "You Scored " + finalScore;
	$('#instructions').show();
	userName= prompt("Please Enter Your Name, ");
	var userObject = {
		Name: userName,
		Score: finalScore
	}
	highScoreStorage.push(userObject);
	localStorage.setItem("userHighScore", JSON.stringify(highScoreStorage));
	clearInterval(interval);
	toggleHide();
	return;
	}

function toggleHide(){
	startButton.classList.toggle("hide");
	ansButton1.classList.toggle("hide");
	ansButton0.classList.toggle("hide");
	ansButton2.classList.toggle("hide");
	ansButton3.classList.toggle("hide");
	return;
}


var quizQuestions = [
	{
		question: 'What is the HTML tag under which one can write the JavaScript code?',
		answer: ['<javascript>', '<scripted>', '<script>', '<js>'],
		correct: '<script>',
	},

	{
		question: 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
		answer: ['alertbox(“GeeksforGeeks”);', 'msg(“GeeksforGeeks”);', 'msgbox(“GeeksforGeeks”);', 'alert(“GeeksforGeeks”);'],
		correct: 'alert(“GeeksforGeeks”);',
	},

	{
		question: "What is the correct syntax for referring to an external script called “geek.js”?",
		answer: ['<script src=”geek.js”>', '<script ref=”geek.js”>', '<script name=”geek.js”>', '<script href=”geek.js”>'],
		correct: '<script src=”geek.js”>',
	},

	{
		question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
		answer: ['function = Geekfunc()', 'function Geekfunc()', 'function := Geekfunc()', 'function : Geekfunc()'],
		correct: 'function Geekfunc()',
	},

	{
		question: "How is the function called in JavaScript?",
		answer: ['call Geekfunc();', 'call function GeekFunc();', 'Geekfunc();', 'function Geekfunc();'],
		correct: 'Geekfunc();',
	},

	{
		question: "What is the correct syntax for adding comments in JavaScript?",
		answer: ['<!–This is a comment–&gt', '//This is a comment', '–This is a comment', '**This is a comment**'],
		correct: '//This is a comment',
	},

	{
		question: "What is the JavaScript syntax for printing values in Console?",
		answer: ['print(5)', 'console.log(5);', 'console.print(5);', 'print.console(5);'],
		correct: 'console.log(5);'
	},

	{
		question: "How to initialize an array in JavaScript?",
		answer: ['var Geeks= “Geek1”, “Geek2”, “Geek3”', 'var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)', 'var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)', 'var Geeks=[“Geek1”, “Geek2”, “Geek3”]'],
		correct: 'var Geeks=[“Geek1”, “Geek2”, “Geek3”]',
	},

	{
		question: "What will be the command to print the number of characters in the string “GeeksforGeeks”?",
		answer: ['document.write(“GeeksforGeeks”.len);', 'document.write(sizeof(“GeeksforGeeks”));', 'document.write(“GeeksforGeeks”.length);', 'document.write(lenof(“GeeksforGeeks”));'],
		correct: 'document.write(“GeeksforGeeks”.length);',
	},

	{
		question: "Which was the first browser to support JavaScript?",
		answer: ['Mozilla Firefox', 'Netscape', 'Google Chrome', 'Internet Explorer'],
		correct: 'Netscape',
	}
];



