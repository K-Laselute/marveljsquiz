# marveljsquiz
A simple quiz app with questions from the marvel "comic" universe. I wanted to make a quiz app to help get me more familiar with JavaScript, DOM Manipulation, and localStorage. 

---- WALKTHROUGH ----

    First page shows two buttons
    -Play
        On the next page you have a difficulty choice.
        -Easy
        -Hard
        Once the quiz starts you have a choice of four answers that are being pulled from a separate json file filled with the questions and correct answers. Once a question is choosen the script checks the answer to see if its right or wrong. Correct questions will highlight green. Wrong answers will highlight red. A new question will replace the current one on the same page. There is a progress bar to show how many questions are left in the quiz. There is also a score tracking system in the top right of the quiz. Each question is worth 10 points.
        -Game Over
            Once the game is finished the score is shown and this data will be stored in localStorage. The difficulty that was picked will also be saved and stored with score. The user will have an opportunity to enter his/her name in the form and save that info. The user can also try the quiz again to improve the score or go to the home page.
    -High Scores
        Since data is stored in localStorage, there will be no data shown if the game has not been played yet. If the game was played through, the highscore data and the difficulty choosen with be displayed on the page. Once the page is closed the data will no longer be available.
    



Thanks for taking to time read this and have a good day!
