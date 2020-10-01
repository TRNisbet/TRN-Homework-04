
const startButton = document.getElementById('startBtn');
var quesEl = document.getElementById('qBlock');
const ansEl = document.getElementById("aBlock");
let shuffledQues, currQuesIndex
var quesCount = 0;
var score = 0;
var selectedAns = "";
// I could not hide the methods by class, s I created an ID for each button
var ansButton1 = document.getElementById("ansBtn0");
var ansButton2 = document.getElementById("ansBtn1");
var ansButton3 = document.getElementById("ansBtn2");
var ansButton4 = document.getElementById("ansBtn3");


const startGame = document.getElementById('startBtn');
qBlockEl = document.getElementsByClassName('qBlock');


startGame.addEventListener('click', start);


function start(){
	startButton.classList.add('hide')
	$('#instructions').hide();
	ansButton1.classList.remove("hide");
	ansButton2.classList.remove("hide");
	ansButton3.classList.remove("hide");
	ansButton4.classList.remove("hide");
	shuffledQues = quizQuestions.sort(() => Math.random() - .5);
	console.log('shuffledQues:', shuffledQues)
	currQuesIndex = 0;
	showQues();
}

function showQues() {
	selectedAns = "";
	quesEl.innerText = shuffledQues[quesCount].question;
	
	document.getElementById("ansBtn0").innerText =
		shuffledQues[quesCount].answer[0];
	document.getElementById("ansBtn0").addEventListener("click", function () {
		selectedAns = shuffledQues[quesCount].answer[0];
		console.log('selectedAns0:', selectedAns)
		correctAns();
	});
	
	document.getElementById("ansBtn1").innerText =
		shuffledQues[quesCount].answer[1];
	document.getElementById("ansBtn1").addEventListener("click", function () {
		selectedAns = shuffledQues[quesCount].answer[1];
		console.log('selectedAns1:', selectedAns)
		correctAns();
	});

	document.getElementById("ansBtn2").innerText =
		shuffledQues[quesCount].answer[2];
	document.getElementById("ansBtn2").addEventListener("click", function () {
		selectedAns = shuffledQues[quesCount].answer[2];
		console.log('selectedAns2:', selectedAns)
		correctAns();
	});
	
	document.getElementById("ansBtn3").innerText =
		shuffledQues[quesCount].answer[3];
	document.getElementById("ansBtn3").addEventListener("click", function () {
		selectedAns = shuffledQues[quesCount].answer[3];
		console.log('selectedAns3:', selectedAns)
		correctAns();
	});

	document.getElementById("ansBtn0").addEventListener("click", function () {
		selectedAns = shuffledQues[quesCount].answer[0];
		console.log('selectedAns0:', selectedAns)
		correctAns();
	});

}

function correctAns(){
	console.log('selectedAns:', selectedAns)
	console.log('ArrayAns:', shuffledQues[quesCount].correct)
	if (selectedAns === shuffledQues[quesCount].correct) {
	console.log("YES!!!")
	score = score + 10;
	console.log('score:', score);
	} else {
		console.log("FAIL!!!")
		score = score - 10;
		console.log('score:', score);

	}
}

// function correctAns(){
// 	if (document.getElementbyID) {
		
// 	}

// }


// function selectAns() {

// }


// for (var index = 0; index < quizQuestions.length; index++) {
// 	var userAns = quizQuestions[index].correct; //need to display question and answer in Div on HTML
	
// 	if (userAns === quizQuestions[index].correct && time>0) {
// 		score = score + 10;
// 	} else if (userAns !== quizQuestions[index].correct && time > 0) {
// 		score = score - 10;
// 	} else {
	
// 	}

// }


// function nxtQues() {
// 	var currentQuestion = quizQuestions[questionNumber];
// 	console.log('currentQuestion:', currentQuestion)

// 	var questionContainer = document.getElementById('qBlock')[0];
// 	console.log('questionContainer:', questionContainer)

// 	var questionTitle = document.createElement('h3');
// 	questionTitle.textContent = currentQuestion.Question;
// 	questionContainer.appendChild(questionTitle);
// 	var answerContainer = document.getElementById('aBlock')[0];


// 	currentQuestion.Answers.forEach(answer => {
// 		var answerBtn = document.createElement('button');
// 		answerBtn.setAttribute('value', answer);
// 		answerBtn.textContent = answer;
// 		answerBtn.onclick = clickAnswer;
// 		answerContainer.appendChild(answerBtn);
// 		return answerContainer;
// 	});
// }




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





