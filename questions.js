
//Does this look to call the parts of the objects to get the questions to generate?  

//Following questions from Geeks for Geeks: JavaScript Quiz sets 1, 2, 3. 
//https://www.geeksforgeeks.org/javascript-quiz-set-1/

var quizQuestions = [
    {
Question: 'What is the HTML tag under which one can write the JavaScript code?',
Answers: ['<javascript>', '<scripted>', '<script>', '<js>'], 
Correct: '<script>',
    },

{
Question: 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
Answers: ['alertbox(“GeeksforGeeks”);', 'msg(“GeeksforGeeks”);', 'msgbox(“GeeksforGeeks”);', 'alert(“GeeksforGeeks”);'],
Correct: 'alert(“GeeksforGeeks”);',
},

{
Question: "What is the correct syntax for referring to an external script called “geek.js”?",
Answers: ['<script src=”geek.js”>', '<script ref=”geek.js”>', '<script name=”geek.js”>', '<script href=”geek.js”>'],
Correct: '<script src=”geek.js”>',
},

{
Question: "What is the syntax for creating a function in JavaScript named as Geekfunc?",
Answers: ['function = Geekfunc()', 'function Geekfunc()', 'function := Geekfunc()', 'function : Geekfunc()'],
Correct: 'function Geekfunc()',
},

{
Question: "How is the function called in JavaScript?",
Answers:['call Geekfunc();', 'call function GeekFunc();', 'Geekfunc();', 'function Geekfunc();'],
Correct: 'Geekfunc();',
},

{
Question: "What is the correct syntax for adding comments in JavaScript?",
Answers:['<!–This is a comment–&gt', '//This is a comment', '–This is a comment', '**This is a comment**'],
Correct: '//This is a comment',
},

{
Question: "What is the JavaScript syntax for printing values in Console?",
Answers:['print(5)', 'console.log(5);', 'console.print(5);', 'print.console(5);'],
Correct: 'console.log(5);' 
},

{
Question: "How to initialize an array in JavaScript?",
Answers: ['var Geeks= “Geek1”, “Geek2”, “Geek3”', 'var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)', 'var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)', 'var Geeks=[“Geek1”, “Geek2”, “Geek3”]'],
Correct: 'var Geeks=[“Geek1”, “Geek2”, “Geek3”]', 
},

{
Question: "What will be the command to print the number of characters in the string “GeeksforGeeks”?",
Answers: ['document.write(“GeeksforGeeks”.len);', 'document.write(sizeof(“GeeksforGeeks”));', 'document.write(“GeeksforGeeks”.length);', 'document.write(lenof(“GeeksforGeeks”));'],
Correct: 'document.write(“GeeksforGeeks”.length);', 
},

{
Question:"Which was the first browser to support JavaScript?",
Answers: ['Mozilla Firefox','Netscape', 'Google Chrome', 'Internet Explorer'],
Correct: 'Netscape',
}


];

console.log(quizQuestions)