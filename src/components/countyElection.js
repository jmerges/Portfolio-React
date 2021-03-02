import React from "react";

function CountyElection () {
    return (
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
    )
}

export default CountyElection;