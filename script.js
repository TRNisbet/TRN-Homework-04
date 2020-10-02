
const startButton = document.getElementById('startBtn');
var quesEl = document.getElementById('qBlock');
const ansEl = document.getElementById("aBlock");
// let shuffledQues; 
var quesCount = 0;
var score = 0;
var selectedAns = "";
// I could not hide the methods by class, s I created an ID for each button
var ansButton0 = document.getElementById("ansBtn0");
var ansButton1 = document.getElementById("ansBtn1");
var ansButton2 = document.getElementById("ansBtn2");
var ansButton3 = document.getElementById("ansBtn3");


// const startGame = document.getElementById('startBtn');
qBlockEl = document.getElementsByClassName('qBlock');


startButton.addEventListener('click', start);


function start(){
	startButton.classList.add('hide')
	$('#instructions').hide();
	ansButton0.classList.remove("hide");
	ansButton1.classList.remove("hide");
	ansButton2.classList.remove("hide");
	ansButton3.classList.remove("hide");
	// shuffledQues = quizQuestions.sort(() => Math.random() - .5);
	// console.log('shuffledQues:', shuffledQues)
	score = 0;
	quesCount = 0;
	showQues();
}

function showQues() {
	selectedAns = "";
	ansButton0 = "";
	ansButton1 = "";
	ansButton2 = "";
	ansButton3 = "";
	quesEl.innerText = quizQuestions[quesCount].question;
	
	console.log('quesCountAtTopofShowQuesFunction:', quesCount);
	console.log('quizQuestions:', quizQuestions[quesCount]);

	
	document.getElementById("ansBtn0").innerText =
		quizQuestions[quesCount].answer[0];
		document.getElementById("ansBtn0").addEventListener("click", function () {
			selectedAns = quizQuestions[quesCount].answer[0];
		correctAns();
	});
	
	document.getElementById("ansBtn1").innerText =
		quizQuestions[quesCount].answer[1];
	document.getElementById("ansBtn1").addEventListener("click", function () {
		selectedAns = quizQuestions[quesCount].answer[1];
		correctAns();
	});

	document.getElementById("ansBtn2").innerText =
		quizQuestions[quesCount].answer[2];
	document.getElementById("ansBtn2").addEventListener("click", function () {
		selectedAns = quizQuestions[quesCount].answer[2];
		correctAns();
	});
	
	document.getElementById("ansBtn3").innerText =
		quizQuestions[quesCount].answer[3];
	document.getElementById("ansBtn3").addEventListener("click", function () {
		selectedAns = quizQuestions[quesCount].answer[3];
		correctAns();
	});
}



function correctAns(){
	if (quesCount < quizQuestions.length) {
		console.log('quesCount Right After "IF":', quesCount)
		
	
		if (selectedAns === quizQuestions[quesCount].correct) {
				console.log("YES!!!");
				score = score + 10;
				console.log('score:', score);
			} else {
				console.log("FAIL!!!");
				score = score - 10;
				console.log('score:', score);
			}
		quesCount++;

		showQues();

	} else{ 
		console.log("It stopped")
		console.log("quizQuestions.length UNDER STOP", quizQuestions.length)
		
		}

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



