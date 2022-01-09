import React from "react";
import {FaGithub, FaEnvelope, FaLinkedin, FaHeart} from 'react-icons/fa';

// renders the footer to appear on each page at the bottom of the document
export default function Footer(){
    return(
        <footer>
            Get in Touch: 
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=wmdorgan@gmail.com&tf=cm"><FaEnvelope /></a>
            <a href="https://github.com/emdorgan"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/emily-dorgan/"><FaLinkedin /></a>
        </footer>
    )
}