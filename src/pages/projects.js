import React from "react";
// import CountyElection from "../components/CountyElection.js";
// import CodingHomepage from "../components/CodingHomepage.js";
// import ClickyGame from "../components/ClickyGame.js";
// import WeatherDashboard from "../components/WeatherDashboard.js";
// import CodeQuiz from "../components/CodeQuiz.js";
// import WorkoutTracker from "../components/WorkoutTracker.js";

function Projects () {
    return (
    <div>
        {/* <CountyElection />
        <CodingHomepage />
        <WorkoutTracker />
        <ClickyGame />
        <WeatherDashboard />
        <CodeQuiz /> */}
                <div className="container bg-dark">
        <h1 className="projectHeader"><a href="https://enigmatic-woodland-43956.herokuapp.com/">County Presidential Results App</a></h1>
        <div className="row">
            <div className="col-4">
                <br />
                <p>For this project, I worked with <a href="https://github.com/vincent-nguyen8931">Vincent Nguyen</a> and <a href="https://github.com/Jas-F">Jasmine Franklin</a> to create a county based election results app. This app features two graphs which are generated when the user types in a county and state, such as "Yolo, California". The first graph shows the presidential election results of the county from 2000-2016, and the second graph shows the demographic data from that county for the same years. My idea for the app was that by showing these data side by side in an easy to digest fashion, users can get a feel for how their county has shifted politically and demographically in the last twenty years and how those things might be related. The project was a blast.</p>
                <br />
                <p>I used a Sequel database to store the county presidential election information. Each state in the database has many counties, these counties have many parties and the parties contain the voting information by party. Sequel made sense for this database because of the clear parental structure and the obvious relationships involved.</p>
                <br />
                <p>In order to grab demographic data, I accessed the US Census API. This proved to be more involved than I expected because of the sheer size of the API. It took me many hours of wading through the documentation to figure out which of the Census tables I needed, and which variables stored in these tables I actually wanted to reference. The tables are absolutely huge, and there a lot of them.</p>
            </div>
            <div className="col-8">
                <br />
                <br />
                <br />
                <br />
                <img height="250" src="./preview.png" alt="Site Preview" />
                <br />
                <br />
                <br />
                <br />
                <img height="216" src="./graphsPreview.png" alt="Graphs Preview" />
            </div>
        </div>
    </div>
    <div className="container bg-dark">
            <h1 className="projectHeader"><a href="https://github.com/michaelanthonyyy/aio-developer-homepage">Coding Homepage</a></h1>
            <div className="row">
                <div className="col-6">
                    <p>For this project, (demo on the right) I worked with <a href="https://github.com/michaelanthonyyy">Michael Medina</a> and <a href="https://github.com/RyanKirkland86">Ryan Kirkland
                        </a> to create a coding homepage. We used <a href="https://animate.style/">animate.css</a>, <a href="https://bulma.io/">Bulma</a> and several different
                        APIs (including <a href="https://developer.nytimes.com/">NY Times</a>, <a href="https://developers.giphy.com/">GIPHY</a>, <a href="https://zenquotes.io/">Zenquotes</a>) to create
                         a sort of all-in-one page for coders. Coders are faced with a high amount of information bloat every day, and this page is designed to help people by providing a homepage that
                         acts like a central hub for coding resources.</p>
                    <br />
                    <p>My specific tasks were to create a technology news carousel that displays several current articles:
                                <br />
                                <img id="newsPreview" src="./NewsFeedDEMO.gif" alt="News Preview" /></p>

                    <br />
                    <p>I also made a dark mode functionality for the page so it's less jarring on the eyes.</p>
                </div>
                <div className="col-6">
                    <br />
                    <p>
                                And a notes section that allows the user to record and save their notes to their local machine:
                                <br />
                                <img id="notesPreview" src="https://media.giphy.com/media/fbFCoc5r82XZ1L73Ns/giphy.gif" alt="Notes Preview" />
                    </p>
                    <br />
                    <br />
                    <img height="300" src="./DeployedDEMO.gif" alt="Coding Homepage Preview" />
                </div>
            </div>
        </div>
        <div className="container bg-dark">
        <h1 id="bioHeader"><a href="https://young-scrubland-79354.herokuapp.com/">Workout Tracker</a></h1>
        <div className="row">
                <p>I created this app to track user's workouts, and to practice express routing.</p>
                <br />
                <p>I was given the front end without much context and asked to build the backend for this assignment. This was a unique challenge, because it was not very obvious how to set up the back end from looking at the front end. Things were not super clear and I had to read through the front end for a good while before I was confident to make the back end.</p>
                <br />
                <p>This assignment was an excercise in reading and understanding pre existing code. Code can be hard to digest and navigate, so this assignment was solid practice.</p>
                <br />
                <br />
                <img height="300" src="./WorkoutTracker.png" alt="Profile Pic" />
        </div>
    </div>
    <div className="container bg-dark">
        <h1 id="bioHeader"><a href="https://jmerges.github.io/Clicky-Game-React/">Clicky Game</a></h1>
                <p>This app was to practice using React.</p>
                <br />
                <p>It's a little game where you click the characters and try to get all of them without clicking the same character twice. It was annoying to get all the characters associated with the right tiles and have them shuffle correctly.</p>
                <br />
                <p>This was a good way to learn React and it demonstrated the potential of the framework. The characters are from futurama, an excellent tv show.</p>
                <img style={{margin: 60}} height="300" src="./clickygamepreview.png" alt="Clicky Game Preview" />
    </div>
    <div className="container bg-dark">
        <h1 id="bioHeader"><a href="https://jmerges.github.io/weather-dashboard/">Weather Dashboard</a></h1>
        <div className="row">
                <p>This application searches for a city's weather data and displays it on the screen. It also forecasts the next 5 days for the city.
                         Each time a city is searched it is added to a list that is stored in localstorage. This list is displayed on the left hand side of
                          the screen, and each city on the list is a clickable button that pulls up that city's weather data.</p>
                <br />
                <p>I was given an image to go off of, but other than that I built the application from scratch using html,
                         javascript, and <a href="https://bulma.io/">Bulma</a> which is an online collection of CSS classes.</p>
                <img style={{margin: 50}}height="400" src="./weatherPreview.png" alt="Weather Preview" />
        </div>
    </div>
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
    </div>
    )
}

export default Projects;