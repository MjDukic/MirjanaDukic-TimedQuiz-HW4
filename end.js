var username = document.querySelector('#username')
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var finalScore = document.querySelector('#finalScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')

var highScores = JSON.parse(localStorage.getItem('highScores')) || []

var maxHighScores = 5

finalScore.innerText = mostRecentScore

//makes the user input a name 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

//gets the correct high score # and the correlated username
saveHighScore = e => {
    e.preventDefault()

    var score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })


//keeps the top five highest scores
highScores.splice(5)

localStorage.setItem('highScores', JSON.stringify(highScores))
// window.location.assign('')
}
