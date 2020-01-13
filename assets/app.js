const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

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

// constants

const Correct_Bonus = 10;
const Max_Questions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions === 0 || questionCounter >= Max_Questions) {
        // go to the end game page
        return window.location.assign("/end.html");
    };

    // No more questions? 
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
        // go to the end page
        return window.location.assign('/end.html');
    }
    // Generate a random question and assig it to the h2 w/ class of question 
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${Max_Questions}`;
    // update the progress bar 
    progressBarFull.style.width = `${(questionCounter / Max_Questions) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion ['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === "correct") {
            incrementScore(Correct_Bonus);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        
    });
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();