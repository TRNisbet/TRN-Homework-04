//more old code 
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




	// document.getElementById("ansBtn0").addEventListener("click", function () {
	// 	selectedAns = shuffledQues[quesCount].answer[0];
	// 	console.log('selectedAns0:', selectedAns)
	// 	correctAns();
	// });





























//New attempt above - tutor info below

// function nextQuestion () {
// 	var currentQuestion = quizQuestions[questionNumber];
// 	var questionContainer = document.getElementsByClassName('questionBlock')[0];
// 	var questionTitle = document.createElement('h3');
// 	questionTitle.textContent = currentQuestion.Question;
// 	questionContainer.appendChild(questionTitle);
//   var answerContainer = document.getElementsByClassName('answerBlock')[0];


//       currentQuestion.Answers.forEach(answer => {
//         var answerBtn = document.createElement('button');
//         answerBtn.setAttribute('value', answer);
//         answerBtn.textContent = answer;
//         answerBtn.onclick = clickAnswer;
//         answerContainer.appendChild(answerBtn);
//         return answerContainer;
//       });


//     // function clickAnswer () {
//     //   // logic for when an answer is clicked
//     //   if answerContainer.answerbtn === answerContainer.answerBlock[0]) {
//     //     console.log('answerBlock:', answerBlock)
//     //     console.log('answerContainer:', answerContainer)
//     //     console.log('answerBtn:', answerBtn)
//     //     alert("it worked")
//     //     }

//     //   }

//   // function nextQuestion ();
// }

// function moveBar () {
// 	$('#startBtn').hide();
// 	$('#instructions').hide();
// 	nextQuestion();
// 	var elem = document.getElementById('myProgress');
// 	var width = 0;
// 	var id = setInterval(timer, time);
// 	function timer () {
// 		if (width === 100) {
// 			clearInterval(id);
// 		}
// 		else {
// 			width++;
// 			elem.style.width = width + '%';
// 		}
// 	}
// }



