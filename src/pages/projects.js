import React from "react";
import countyElection from "../components/countyElection";

function Projects () {
    return (
    <div>
        <countyElection />
        <div className="container bg-dark">
            <h1 className="projectHeader">Coding Homepage</h1>
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
    </div>
    )
}

export default Projects;