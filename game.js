var question = document.querySelector('#question')
var choices = Array.from(document.querySelectorAll('.choice-text'))
var progressText = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')
var progressBarFull = document.querySelector('#progressBarFull')

//let is new..(used for value to be able to change)
let currentQuestion= {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What does API stand for?',
        choice1: 'application programming interface',
        choice2: 'application processing interface',
        choice3: 'advanced processing interface',
        choice4: 'advanced programing interweb',
        answer: 1,
    },
    {
        question: 'What is input validation?',
        choice1: 'standardizing or normalizing something',
        choice2: 'making sure there are limitations or restrictions',
        choice3: 'first option',
        choice4: 'not second option',
        answer: 2,
    },
    {
        question: 'What are the two main methods that localstorage has?',
        choice1: 'getitem and fetchitem',
        choice2: 'fetchitem and setitem',
        choice3: 'getitem and setitem',
        choice4: 'setinterval and fetchitem',
        answer: 3,
    },
    {
        question: 'How do you push updated work to your repo?',
        choice1: 'git add . > git commit -m "" > git push origin main',
        choice2: 'git commit -m > git add . > git push origin main',
        choice3: 'git add . > git status > git push origin main',
        choice4: 'git add > git commit m "" > git push',
        answer: 1,
    },
]

/*variables*/
var scorePoints = 5
var maxQuestions = 4
var time = 25;
var timeEl = document.getElementById("timer");
var remainingTime = "";
var timeID;

/*beginning of game*/
startGame = () => { 
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    remainingTime = time;
    timeID = setInterval(startTime, 1000)
    timeEl.textContent = time;
    getNewQuestion()
}

/* timer for the game and when timer hits zero, goes to end game*/
var startTime = function () {
    time--;
    timeEl.textContent = time;
    if ( time <= 0) {
        clearInterval(timeID)
        //window.location.replace("./end.html");
        window.location.href = "./end.html";
    }
}

/*shows the most recent score*/ 
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }
/*how to get the new question with it showing what question we are on out of the total # of questions*/
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
/*calculates what quesiton we are on with what percentage we are at too */
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
/*keeps track of what question we are currently on*/
    currentQuestion = availableQuestions[questionIndex]
/*what question to ask with correct answer*/
    question.innerText = currentQuestion.question

/*knows what choice we are clicking on*/
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })


    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
       if(!acceptingAnswers) return
       
       acceptingAnswers = false
       const selectedChoice = e.target
       const selectedAnswer = selectedChoice.dataset['number']

/*connects to css and will show up green or red*/
       let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

       if (classToApply === 'correct') {
        incrementScore(scorePoints)
       }

       selectedChoice.parentElement.classList.add(classToApply)
/*will give time to show whether answer is right or wrong*/
       setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

       }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
