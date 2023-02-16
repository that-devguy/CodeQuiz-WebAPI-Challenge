//questions
let questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        title: 'The condition in an if / else statement is enclosed within _____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses'
    },
    {
        title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['<script src="xxx.js">, <script href="xxx.js">, <script name="xxx.js">', '<script src="xxx.html">'],
        answer: '<script src="xxx.js">'
    },
    {
        title: 'How can you add a comment in JavaScript?',
        choices: ['/* This is a comment */', '// This is a comment', '<!-- This is a comment -->', '$ This is a comment'],
        answer: '// This is a comment'
    },
    {
        title: 'Which of the following is NOT a JavaScript keyword?',
        choices: ['let', 'const', 'var', 'git'],
        answer: 'git'
    }
]

//variables for all elements by id
let startButton = document.getElementById('start-btn');
let startScreenEl = document.getElementById('start-screen');
let timeRemainingEl = document.getElementById('time-remaining');
let quizScreenEl = document.getElementById('quiz-screen');



quizScreenEl.setAttribute("hidden", true);






