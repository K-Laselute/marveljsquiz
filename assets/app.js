const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who was not part of the original X-Men?",
        choice1: "Storm",
        choice2: "Cyclops",
        choice3: "Iceman",
        choice4: "Beast",
        answer: 1
    },
    {
        question: "Where does Dr. Strange seek out a cure for his damaged hands?",
        choice1: "China",
        choice2: "Tibet",
        choice3: "Mongolia",
        choice4: "New York",
        answer: 2
    },
    {
        question: "How old is thor",
        choice1: "100",
        choice2: "500",
        choice3: "1000",
        choice4: "1500",
        answer: 3
    },
    {
        question: "The comic book version of 'Iron Man' is based on what real-life eccentric?",
        choice1: "Warren Beatty",
        choice2: "Elon Musk",
        choice3: "Howard Hughes",
        choice4: "Stan Lee",
        answer: 3
    },
    {
        question: "Vanessa Marianna becomes the wife of this Marvel supervillain",
        choice1: "Dr. Octopus",
        choice2: "Kingpin",
        choice3: "Magneto",
        choice4: "Dr. Doom",
        answer: 2
    }
];

// CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    // No more questions? 
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign('/end.html');
    }
    // Generate a random question and assig it to the h2 w/ class of question 
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // grab each choice from the available question and add them to the page
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    // remove question from list
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// Add click listeners for each choice
choices.forEach( choice => {
    choice.addEventListener('click', e => {

        // If we are not accepting answers return nothing
        if(!acceptingAnswers) return;

        //once an choice is selected
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // check if answer is correct
        let classToApply = "incorrect"
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
            incrementScore(CORRECT_BONUS);
            selectedChoice.parentElement.classList.add(classToApply);

            // delay by 1 second to show if the choice selected is right or wrong.
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);

                // pull new question
                getNewQuestion();
            }, 1000);
        } else {
            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                // pull new question
                getNewQuestion();
            }, 1000);
        }
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();