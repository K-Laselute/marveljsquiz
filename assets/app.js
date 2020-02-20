const gamecontainer = document.getElementById('gameContainer');
const difficulty = document.getElementById('difficulty');
const easybtn = document.getElementById('easy');
const hardbtn = document.getElementById('hard');
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

easybtn.addEventListener('click', () => {
    localStorage.setItem('level', easybtn.innerHTML);
    difficulty.style.display = 'none';
    gamecontainer.classList.remove('hidden');
    easy();
})

hardbtn.addEventListener('click', () => {
    localStorage.setItem('level', hardbtn.innerHTML);
    difficulty.style.display = 'none';
    gamecontainer.classList.remove('hidden');
    hard();
})

const easy = () => {
    fetch("./assets/questions.json")
        .then(res => {
            return res.json();
        })
        .then(loadedQuestions => {
            questions = loadedQuestions;
            startGame();
        })
        .catch(err => {
            console.error(err);
        })
}

const hard = () => {
    fetch("./assets/hardquestions.json")
        .then(res => {
            return res.json();
        })
        .then(loadedQuestions => {
            questions = loadedQuestions;
            startGame();
        })
        .catch(err => {
            console.error(err);
        })
}


// constants

const Correct_Bonus = 10;
const Max_Questions = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    setTimeout(() => {
        loader.classList.add('hidden');
        game.classList.remove('hidden');
    }, 1500);
};

getNewQuestion = () => {
    if(availableQuestions === 0 || questionCounter >= Max_Questions) {
        localStorage.setItem('mostRecentScore', score);
        // go to the end game page
        return window.location.assign("./end.html");
    };

    // No more questions? 
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
        // go to the end page
        return window.location.assign('./end.html');
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