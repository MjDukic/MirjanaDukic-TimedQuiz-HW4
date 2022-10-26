// var quiz = document.getElementById("quiz");
// //storing all questions within this variable but switching pages at the same time
// var questions = [
//     {
//     title: 'What does API stand for?',
//     answers: 
//     [
//         {
//             answer: 'application programming interface',
//             correct: true
//         },
//         {
//             answer: 'application processing interface',
//             correct: false
//         },
//         {
//             answer: 'advanced processing interface',
//             correct: false
//         }
//     ]
//     },
// //NOT WORKING COME BACK TO IT
//     {
//     title: 'What is input validation',
//     answers: 
//     [
//         {
//             answer: 'standardizing or normalizing something',
//             correct: false
//         },
//         {
//             answer: 'making sure there are limitations or restrictions',
//             correct: true
//         }
//     ]
//     }
// ]

// var currentQuestion = 0


// // var state = {  <-- could have been helpful to track how many correct or incorrect
// //     correct: 0,
// //     incorrect: 0;

// // } 

// //working in html in js with extension support, setting up how page will look
// function homePage() {
//     quiz.innerHTML = /*html*/`
//         <p>
//             My Quiz 
//         </p>
//         <button id="startQuiz">Begin Quiz</button>
//     `


//     document.getElementById('startQuiz')
//     .addEventListener(
//         'click', function() {
//             questionPage(questions[currentQuestion])
//         }
//     )
// }

// function questionPage(question) {
//     quiz.innerHTML = /*html*/`
//     <p>
//         ${question.title}
//     </p>
//     <ul>
//         <li><button id="answerOne">${question.answers[0].answer}</button></li>
//         <li><button id="answerTwo">${question.answers[1].answer}</button></li>
//         <li><button id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button></li>
//     </ul>
// `

// document
// .getElementById('answerOne')
// .addEventListener(
//     'click', 
//     function(event) {
//         currentQuestion++
//         questionPage(questions[currentQuestion])
//     }
//     )


// }

// homePage()