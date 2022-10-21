var quiz = document.getElementById("quiz");
function homePage() {
    quiz.innerHTML = /*html*/`
        <p>
            My Quiz 
        </p>
        <button id="startQuiz">Start Quiz</button>
    `

    document.getElementById('startQuiz')
    .addEventListener(
        'click', function() {
            questionPage()
        }
    )
}

function questionPage() {
    quiz.innerHTML = /*html*/`
    <p>
        Question 1
    </p>
    <ul>
        <li><button>Option A</button></li>
    </ul>
`
}

homePage()