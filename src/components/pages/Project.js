import React from "react";

// Card template with data filled in for each project in the projects array
export default function Project(props){
    return(
        <article className = "portfolio-cards">
            <div className="card custom-card">
                <a href={props.project.deployed}>
                    <img src={props.project.img} className="card-img-top" alt={props.project.title} />
                </a>
                <div className="card-body custom-card-body">
                    <h3 className="card-title">{props.project.title}</h3>
                    <p className="card-text">{props.project.description}</p>
                    <a className="btn btn-primary custom-btn" href={props.project.deployed} target="_blank" rel="noreferrer">See Deployed</a>
                    <a className="btn btn-primary custom-btn" href={props.project.repo} target="_blank" rel="noreferrer">See Repo</a>
                </div>
            </div>
        </article>
    )
}