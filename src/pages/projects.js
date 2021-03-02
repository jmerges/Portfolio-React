import React from "react";
import CountyElection from "../components/CountyElection";
import CodingHomepage from "../components/CodingHomepage";
import ClickyGame from "../components/ClickyGame";
import WeatherDashboard from "../components/WeatherDashboard";
import CodeQuiz from "../components/CodeQuiz";
import WorkoutTracker from "../components/WorkoutTracker";

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