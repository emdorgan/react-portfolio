import React from "react";
import emily2 from '../images/emily2.jpg'

// component for the About Me page
export default function About(){
    return(
        <section id="about-me" className="container-fluid">
            <h2>About Me</h2>
            <article className="about-me">
                <div className="picture-frame">
                    <img src={emily2} alt="Emily1"/>
                </div>
                <div className="me-text">
                <p>
                I am a Full Stack Web Developer with a background in design and a lot of experience in education. 
                On the front end, I know HTML, CSS, JavaScript, React, Handlebars, Bootstrap, JQuery and AJAX.
                On the back end, I know Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose and GraphQL.
                I also have some UI/UX design experience to complement my technical proficiencies.
                </p>
                <p>I've always been a curious person and I have a strong love of learning new things, 
                which is what brought me to the field of web development. I currently live in the bay area with my cat
                and I am currently seeking employment as a Full Stack Web Developer or Technical Solutions Engineer.</p>
                </div>
            </article>
        </section>
    )
}