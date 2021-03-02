import React from "react";

function WeatherDashboard() {
    return (
    <div className="container bg-dark">
        <h1 id="bioHeader">Bio</h1>
        <div className="row">
            <div className="col-8">
                <p>Hi, I'm James and this is my portfolio.</p>
                <br />
                <p>I graduated in physics (focus in computational analysis) from UC Davis in spring of 2020. Although my major was physics, I was drawn to my computer science classes and physics classes which involved computation and data analysis. My favorite class was a math class which had two MATLAB projects, a fractal generator and a simple convolutional neural network. It was through these projects that I realized I wanted to focus on coding.</p>
                <br />
                <p>After I graduated, I spent some time looking for a job in tech but I found it quite hard to get my foot in the door. I had the hunger to code, but I didn't have the Git profile nor really any notable relavant experience. Yes, my major involved computational analysis (what does that mean?), but it was still a physics major, not a computer science major. I realized I needed to get more serious about what it means to code in a professional setting, so I applied for the Berkeley Bootcamp for web development.</p>
                <br />
                <p>I am currently enrolled in the Bootcamp, and I would like to humbly say I've come a long way. So I made this page to highlight some of my accomplishments and to showcase what I've learned at the Bootcamp.</p>
            </div>
            <div className="col-4">
                <br />
                <br />
                <img height="300" src="./Profile Pic.jpg" alt="Profile Pic" />
            </div>
        </div>
    </div>
    )
}