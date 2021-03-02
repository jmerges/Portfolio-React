import React from "react";

function CodeQuiz() {
    return (
        <div className="container bg-dark">
            <h1 id="bioHeader"><a href="https://jmerges.github.io/quiz-game/">Code Quiz</a></h1>
            <div className="row">
                <div className="col-5">
                    <p>This application is a little quiz that tests the user's coding knowledge. It features a timed quiz with several
                         multiple choice questions and a high score page which displays all the high scores stored on the machine.</p>
                    <br />
                    <p>HTML, CSS and Bootstrap were used to construct the basic layout of the page, and javascript was used to run the quiz.</p>
                    <br />
                </div>
                <div className="col-7">
                    <br />
                    <br />
                    <img height="300" src="./CodeQuizImage.png" alt="Code Quiz Preview" />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default CodeQuiz;