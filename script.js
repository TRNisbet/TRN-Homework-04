<script src="questions.js"></script>

var questionNumber = 0;
var score = 0;
// need a time variable in the function that would increase the amount of time for a right answer and deduct for a wrong answer -
// this bar might quickly become over my head
// might be one big ASS function once this is over
// Giant function would be set to onclick which would trigger the status bar, and the questions (I think)

// High scores put into an array with the intials in a for loop displaying them in order based on max highscore
//need to pass in a parameter to the function to stip it from being neting to the nth degree

for (var index = 0; index < quizQuestions.length; index++) {
	const element = quizQuestions[index];
	
}

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



