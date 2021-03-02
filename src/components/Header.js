import React from "react";
import { Link } from "react-router-dom";

function Header () {

    return (
        <div className="jumbotron text-white bg-dark">
            <div className="row">
                <div className="col-10">
                    <h1 id="home"><Link to="/" className="text-white">James Merges</Link></h1>
                    <h2 id="projects"><Link to="/projects" className="text-white">Projects</Link></h2>
                </div>
                <div className="col-2">
                    <h2><a href="https://github.com/jmerges" className="text-white">Github</a></h2>
                    <h2><a href="mailto: jamesmerges1@gmail.com" className="text-white">Email</a></h2>
                    <h2><a href="https://www.linkedin.com/in/james-merges-b938401b7/" className="text-white">LinkedIn</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Header;