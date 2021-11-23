import React from "react";
import Project from './Project';
import kitschyImg from '../images/kitschy.png'
import traveleezeImg from '../images/traveleeze.png'
import techBlogImg from '../images/tech-blog.png'
import weatherDashboardImg from '../images/weather-dashboard.png'
import notesImg from '../images/notes.png'
import quizImg from '../images/code-quiz.png'

// These will eventually be pulled from a database that I make when I convert this to a full-stack app
const projects = [
    {
        title: "Kitschy App",
        description: "Search recipies, save your favorites and compile a grocery list.",
        deployed: "https://starryblue7.github.io/kitschy-app/",
        repo: "https://github.com/emdorgan/kitschy-app",
        img: kitschyImg
    },
    {
        title: "Traveleeze",
        description: "Save travel plans, packing lists and journals with user accounts.",
        deployed: "https://evening-fjord-31070.herokuapp.com/",
        repo: "https://github.com/emdorgan/trip-planner",
        img: traveleezeImg
    },
    {
        title: "Tech Blog",
        description: "Make blog posts and leave comments with user accounts.",
        deployed: "https://pacific-beach-72333.herokuapp.com/",
        repo: "https://github.com/emdorgan/tech-blog",
        img: techBlogImg
    },
    {
        title: "Weather Dashboard",
        description: "Search for a city to get it's current weather and a 5 day forecast.",
        deployed: "https://emdorgan.github.io/weather-planner/",
        repo: "https://github.com/emdorgan/weather-planner",
        img: weatherDashboardImg
    },
    {
        title: "Note Taker",
        description: "Add or remove notes which persist server-side.",
        deployed: "https://stark-dusk-44637.herokuapp.com/",
        repo: "https://github.com/emdorgan/note-taker",
        img: notesImg
    },
    {
        title: "Code Quiz",
        description: "Code Quiz on JavaScript, features highscore table using local storage.",
        deployed: "https://emdorgan.github.io/code-quiz/",
        repo: "https://github.com/emdorgan/code-quiz",
        img: quizImg
    }
]

// iterates through the array and passes down the values to be rendered by the project component
export default function Portfolio(){
    return(
        <section id="portfolio" className="container-fluid">
            <h2>My Work</h2>
            <div className="custom-flex">
                {projects.map((item, i) =>(
                    <Project project = {item} key = {i} />
                ))}
            </div>
        </section>
    )
}