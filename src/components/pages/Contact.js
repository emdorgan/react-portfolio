import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers'
import {FaGithub} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

export default function Contact(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name'){
            setName(inputValue);
        } else {
            setText(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
          setErrorMessage('Email or name is invalid');
          return;
        }
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setText('');
      };

    return(
        <section id="contact-me" className="container-fluid">
            <h2>Contact Me</h2>
            <article className = "contact-me">
                <p>I am currently seeking employment. If you believe that I am a good fit, reach me at:</p>
                <ul>
                    <li>E-mail: <a href="https://mail.google.com/mail/u/0/?fs=1&to=wmdorgan@gmail.com&tf=cm"><FaEnvelope /> wmdorgan@gmail.com</a></li>
                    <li>Github: <a href="https://github.com/emdorgan"><FaGithub /> https://github.com/emdorgan</a></li>
                    <li>Linkedin: <a href="https://www.linkedin.com/in/emily-dorgan/"><FaLinkedin /> https://www.linkedin.com/in/emily-dorgan/</a></li>
                    <li>Instagram: <a href="https://twitter.com/PrezMoocow"><FaTwitter/> https://twitter.com/PrezMoocow</a></li>
                </ul>
            </article>
            <div>
                <form className="form">
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="name"
                        placeholder="name"
                    />
                    <input
                        value={text}
                        name="text"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="text"
                    />
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    )
}