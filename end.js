const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

//makes the user input a name 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

//gets the correct high score # and the correlated username
saveHighScore = e => {
    e.preventDefault()

    const score = {
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
