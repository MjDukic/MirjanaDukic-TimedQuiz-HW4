const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

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

/*when capitalized, its 'fixed'*/
const SCORE_POINTS = 5
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

/*shows the most recent score*/ 
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
/*how to get the new question with it showing what question we are on out of the total # of questions*/
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
/*calculates what quesiton we are on with what percentage we are at too */
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

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
        incrementScore(SCORE_POINTS)
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
