import React from "react";

function WeatherDashboard() {
    return (
    <div className="container bg-dark">
        <h1 id="bioHeader"><a href="https://jmerges.github.io/weather-dashboard/">Weather Dashboard</a></h1>
        <div className="row">
            <div className="col-8">
                <p>This application searches for a city's weather data and displays it on the screen. It also forecasts the next 5 days for the city.
                         Each time a city is searched it is added to a list that is stored in localstorage. This list is displayed on the left hand side of
                          the screen, and each city on the list is a clickable button that pulls up that city's weather data.</p>
                <br />
                <p>I was given an image to go off of, but other than that I built the application from scratch using html,
                         javascript, and <a href="https://bulma.io/">Bulma</a> which is an online collection of CSS classes.</p>
            </div>
            <div className="col-4">
                <br />
                <br />
                <img height="300" src="./weatherPreview.png" alt="Weather Preview" />
            </div>
        </div>
    </div>
    )
}