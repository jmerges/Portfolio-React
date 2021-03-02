import React from "react";
import CountyElection from "../components/CountyElection";
import CodingHomepage from "../components/CodingHomepage";
import ClickyGame from "../components/ClickyGame";
import WeatherDashboard from "../components/WeatherDashboard";
import CodeQuiz from "../components/CodeQuiz";

function Projects () {
    return (
    <div>
        <CountyElection />
        <CodingHomepage />
        <ClickyGame />
        <WeatherDashboard />
        <CodeQuiz />
    </div>
    )
}

export default Projects;