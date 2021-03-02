import React from "react";
import { Link } from "react-router-dom";

function Header () {

    return (
        <div className="jumbotron text-white bg-dark">
            <div className="row">
                <div className="col-10">
                    <h1 id="home"><Link to="/">James Merges</Link></h1>
                    <h2 id="projects"><Link to="/projects">Projects</Link></h2>
                </div>
                <div className="col-2">
                    <h2><a href="https://github.com/jmerges">Github</a></h2>
                    <h2><a href="mailto: jamesmerges1@gmail.com">Email</a></h2>
                    <h2><a href="https://www.linkedin.com/in/james-merges-b938401b7/">LinkedIn</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Header;