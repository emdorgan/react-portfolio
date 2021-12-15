import React from "react";
import emily1 from '../images/emily1.jpg'
import emily2 from '../images/emily2.jpg'
import emily3 from '../images/emily3.jpg'

// component for the About Me page
export default function About(){
    return(
        <section id="about-me" className="container-fluid">
            <h2>About Me</h2>
            <article className="about-me">
                <div className="picture-frame">
                    <img src={emily2} alt="Emily1"/>
                </div>
                <p>
                I am a Full Stack Web Developer.
                I've always been a curious person and I have a strong love of learning new things, which is what brought me to the field of web development. Although my professional path has
          taken some wild turns - most notably with the discovery that I am trans - I am now on track to pursue my dream career of developing attractive and interactive websites. I am currently looking for work
          after having completed the Full Stack Web Development program at UC Berkeley.
                </p>
            </article>
        </section>
    )
}