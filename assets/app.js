const difficulty = document.querySelector('.difficulty');
let easy = document.querySelector('#easy');
let medium = document.querySelector('#medium');
let hard = document.querySelector('#hard');;
let submit = document.querySelector('#submit');
submit.style.display = 'none';

easy.addEventListener('click', function () {
    easyQuiz();
    submit.style.display = 'inline';
    difficulty.style.display = 'none';
});

medium.addEventListener('click', function () {
    mediumQuiz();
    submit.style.display = 'inline';
    difficulty.style.display = 'none';
});

function easyQuiz() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join(" ")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "Who was not part of the original X-Men?",
            answers: {
                a: "Storm",
                b: "Cyclops",
                c: "Iceman",
                d: "Beast"
            },
            correctAnswer: "a"
        },
        {
            question: "Where does Dr. Strange seek out a cure for his damaged hands?",
            answers: {
                a: "China",
                b: "Tibet",
                c: "Mongolia",
                d: "New York"
            },
            correctAnswer: "b"
        },
        {
            question: "How old is thor",
            answers: {
                a: "100",
                b: "500",
                c: "1000",
                d: "1500"
            },
            correctAnswer: "c"
        },
        {
            question: "The comic book version of 'Iron Man' is based on what real-life eccentric?",
            answers: {
                a: "Warren Beatty",
                b: "Elon Musk",
                c: "Howard Hughes",
                d: "Stan Lee"
            },
            correctAnswer: "c"
        },
        {
            question: "Vanessa Marianna becomes the wife of this Marvel supervillain",
            answers: {
                a: "Dr. Octopus",
                b: "Kingpin",
                c: "Magneto",
                d: "Dr. Doom"
            },
            correctAnswer: "b"
        }
    ];

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
};

function mediumQuiz() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join(" ")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "The Vision is an Android created by?",
            answers: {
                a: "Reed Richards",
                b: "Tony Stark",
                c: "Ultron",
                d: "Doctor Doom"
            },
            correctAnswer: "c"
        },
        {
            question: "How many rings of power does Mandarin possess?",
            answers: {
                a: "1",
                b: "2",
                c: "3",
                d: "10"
            },
            correctAnswer: "d"
        },
        {
            question: "Ghost Rider is known as?",
            answers: {
                a: "The Guardian Devil",
                b: "The Spirit of Hate",
                c: "The Spirit of Vengenance",
                d: "The Red Skull"
            },
            correctAnswer: "c"
        },
        {
            question: "The Fantastic Four have the headquarters in what building?",
            answers: {
                a: "Stark Tower",
                b: "Fantastic Headquarters",
                c: "Baxter Building",
                d: "Xavier Institute"
            },
            correctAnswer: "c"
        },
        {
            question: "Who paid Mac Gargan to become the Scorpion?",
            answers: {
                a: "Felicia Hardy",
                b: "The Kingpin",
                c: "Norman Osborn",
                d: "J. Jonah Jameson"
            },
            correctAnswer: "d"
        }
    ];

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
};