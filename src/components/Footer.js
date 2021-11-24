import React from "react";
import {FaGithub, FaEnvelope, FaLinkedin, FaTwitter, FaHeart} from 'react-icons/fa';

export default function Footer(){
    return(
        <footer>
            Made with <FaHeart /> by Emily Dorgan
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=wmdorgan@gmail.com&tf=cm"><FaEnvelope /></a>
            <a href="https://github.com/emdorgan"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/emily-dorgan/"><FaLinkedin /></a>
            <a href="https://twitter.com/PrezMoocow"><FaTwitter/></a>
        </footer>
    )
}