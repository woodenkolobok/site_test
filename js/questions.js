const questions = [
    {
        text: "Выберите недопустимое название переменной в Питоне",
        answers: [
            "4a",
            "classen",
            "number",
            "_"
        ],
        correct_answer: 0,
        valor: 1
    },
    {
        text: "В каком году вышла самая первая версия Питона?",
        answers: [
            "1970г",
            "1983г",
            "1997г",
            "1991г"
        ],
        correct_answer: 3,
        valor: 5
    },
    {
        text: "Как правильно произносися название метода __init__ в Питоне?",
        answers: [
            "Магический метод init",
            "init",
            "дандер-инит",
            "Конструктор"
        ],
        correct_answer: 2,
        valor: 3
    },
    {
        text: "Как легче всего записать латинский алфавит в питоне?",
        answers: [
            "скопировать из интернета",
            "загуглить",
            "ascil_lowercase из модуля string",
            "написать в ручную"
        ],
        correct_answer: 2,
        valor: 1
    },
]

var currentQuestion = 0;
var answerGiven = false;
var valor = 0;

const nextButton = document.getElementById('next_button');
const skipButton = document.getElementById('skip_button');


function selectAnswer(event, correct_answer){
    if (answerGiven)
        return

    answerGiven = true;
    const target = event.target;

    nextButton.classList.remove('hidden')
    skipButton.classList.add('hidden')

    if (correct_answer == target.getAttribute('data-answer-index')){
        target.classList.add("correct")
        target.classList.remove('neutral')
        valor += 1
    }
        
    else {
        target.classList.add("wrong")
        const correctAnswerDiv = document.getElementById('correct_answer')
        correctAnswerDiv.classList.add('correct')
    }

}

function newQuestion(){
    answerGiven = false

    nextButton.classList.add('hidden')
    skipButton.classList.remove('hidden')

    const questionsContainer = document.getElementById("question_container")
    const answersContainer = document.getElementById("answers_container")

    questionsContainer.innerHTML = "";
    answersContainer.innerHTML = "";
    
    const question = questions[currentQuestion]

    const questionDiv = document.createElement('div')
    questionDiv.innerText = question.text
    questionsContainer.append(questionDiv)

    for (let i = 0; i < 4; i++){
        const answer = question.answers[i]
        const newAnswer = document.createElement('div')
        newAnswer.classList.add('answer')
        newAnswer.classList.add('neutral')
        newAnswer.setAttribute("data-answer-index", i)
        newAnswer.innerText = answer
        newAnswer.setAttribute('onclick', `selectAnswer(event, ${question.correct_answer})`)
        if (i == question.correct_answer)
            newAnswer.id = 'correct_answer'
        answersContainer.append(newAnswer)
    }
}

function skip(){
    currentQuestion += 1
    newQuestion()
}

function next(){
    currentQuestion += 1
    newQuestion()
}
newQuestion()