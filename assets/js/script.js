//questions
let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false }, 
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within _____.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'parentheses', correct: true },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: '<script src="xxx.js">', correct: true },
            { text: '<script href="xxx.js">', correct: false },
            { text: '<script name="xxx.js">', correct: false },
            { text: '<script src="xxx.html">', correct: false }
        ]
    },
    {
        question: 'How can you add a comment in JavaScript?',
        answers: [
            { text: '/* This is a comment */', correct: false },
            { text: '// This is a comment', correct: true},
            { text: '<!-- This is a comment -->', correct: false },
            { text: '$ This is a comment', correct: false }
        ]
    },
    {
        question: 'Which of the following is NOT a JavaScript keyword?',
        answers: [
            { text: 'let', correct: false },
            { text: 'const', correct: false },
            { text: 'var', correct: false },
            { text: 'git', correct: true }
        ],
    }
]

//variables for all elements by id
let startButton = document.getElementById('start-btn');
let startScreenEl = document.getElementById('start-screen');
let timeRemainingEl = document.getElementById('time-remaining');
let quizScreenEl = document.getElementById('quiz-screen');
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answers');
let nextButton = document.getElementById('next-btn');
let resultEl = document.getElementById('result');
let resultText = document.getElementById('result-text');


let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
answerEl.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    // console.log('Started');
    startScreenEl.style.display = 'none';
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizScreenEl.style.display = 'flex';
    setNextQuestion();
    
};

function setNextQuestion() {
    clearQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

// displays the question to the screen and verifies the answers are correct
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerEl.appendChild(button);
    })
};

// clears the previous question and answers from the screen
function clearQuestion() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild);
    }
};

// verifies if answer is correct and updates the results
function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    checkAnswer(document.body, correct);
};

function checkAnswer(button, correct) {
    if (correct) {
        resultText.textContent = ('Correct');
        resultEl.style.visibility = "visible";
    } 
    else {
        resultText.textContent = ('Wrong');
        resultEl.style.visibility = "visible";
    }
};
