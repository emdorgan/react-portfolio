import React from "react";

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
                    <a className="btn btn-primary custom-btn" href={props.project.deployed}>See Deployed</a>
                    <a className="btn btn-primary custom-btn" href={props.project.repo}>See Repo</a>
                </div>
            </div>
        </article>
    )
}