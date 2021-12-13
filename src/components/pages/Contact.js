import React from "react";
import {FaGithub} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default function Contact(){

    return(
        <section id="contact-me" className="container-fluid">
            <h2>Contact Me</h2>
            <article className = "contact-me">
                <p>I am currently seeking employment. If you believe that I am a good fit, reach me at:</p>
                <ul>
                    <li>E-mail: <a href="https://mail.google.com/mail/u/0/?fs=1&to=wmdorgan@gmail.com&tf=cm"><FaEnvelope /> wmdorgan@gmail.com</a></li>
                    <li>Github: <a href="https://github.com/emdorgan"><FaGithub /> https://github.com/emdorgan</a></li>
                    <li>Linkedin: <a href="https://www.linkedin.com/in/emily-dorgan/"><FaLinkedin /> https://www.linkedin.com/in/emily-dorgan/</a></li>
                </ul>
            </article>
        </section>
    )
}