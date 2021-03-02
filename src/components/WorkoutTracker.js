import React from "react";

function WorkoutTracker () {
    return (
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
    )
}

export default WorkoutTracker;