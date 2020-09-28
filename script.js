
var time = 100; 
// need a time variable in the function that would increase the amount of time for a right answer and deduct for a wrong answer - 
// this bar might quickly become over my head
// might be one big ASS function once this is over 
// Giant function would be set to onclick which would trigger the status bar, and the questions (T think) 

function moveBar() {
  var elem = document.getElementById("myProgress");
  var width = 0;
  var id = setInterval(timer, time);
  function timer() {
    if (width === 100) {
        clearInterval(id);
    } else {
        width++; 
      elem.style.width = width + '%'; 
    }
  }
}