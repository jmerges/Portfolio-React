import React from "react";
import CountyElection from "../components/CountyElection.js";
import CodingHomepage from "../components/CodingHomepage.js";
import ClickyGame from "../components/ClickyGame.js";
import WeatherDashboard from "../components/WeatherDashboard.js";
import CodeQuiz from "../components/CodeQuiz.js";
import WorkoutTracker from "../components/WorkoutTracker.js";

function Projects () {
    return (
    <div>
        <CountyElection />
        <CodingHomepage />
        <WorkoutTracker />
        <ClickyGame />
        <WeatherDashboard />
        <CodeQuiz />
    </div>
    )
}

export default Projects;