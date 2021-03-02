import React from "react";

function ClickyGame() {
    return (
    <div className="container bg-dark">
        <h1 id="bioHeader"><a href="https://jmerges.github.io/Clicky-Game-React/">Clicky Game</a></h1>
                <p>This app was to practice using React.</p>
                <br />
                <p>It's a little game where you click the characters and try to get all of them without clicking the same character twice. It was annoying to get all the characters associated with the right tiles and have them shuffle correctly.</p>
                <br />
                <p>This was a good way to learn React and it demonstrated the potential of the framework. The characters are from futurama, an excellent tv show.</p>
                <img style={{margin: 60}} height="300" src="./clickygamepreview.png" alt="Clicky Game Preview" />
    </div>
    )
}

export default ClickyGame;