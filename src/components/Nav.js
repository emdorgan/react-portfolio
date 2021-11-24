import React, { useState } from "react";
import resume from './pdf/emd-resume.pdf'
import {FaBars} from 'react-icons/fa'


// Nav contains a boolean useState for the drop-down menu which conditionally renders the <ul> element
export default function Nav({ currentPage, handlePageChange }){

    const [dropdown, setDropdown] = useState(false);


    // if toggler is on, turn it off; if it's off, turn it on.
    const toggleDropdown = () => {
        if(dropdown){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    }
    // If the browser width exceeds 990px, render the 4 links horizontally without a 3-bars icon
    // Otherwise, hide the 4 links (using a state set to false) and render a button which, when clicked,
    // shows the 4 links vertically.
    if(window.outerWidth > 990){
        return (<ul className="navbar-nav custom-align">
                    <li className="nav-item p-1">
                        <a 
                            href = "#portfolio" 
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link custom-active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a 
                            href = "#contact" 
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link custom-active' : 'nav-link'}
                        >
                            Contact Me
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a 
                            href = "#about" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link custom-active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href ={resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
        )
    } else{
    return(
        <nav id="navbarNav">
            <FaBars className="toggler" onClick={toggleDropdown} />
            {dropdown ? (
                <ul className="navbar-nav custom-align">
                    <li className="nav-item p-1">
                        <a 
                            href = "#portfolio" 
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link custom-active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a 
                            href = "#contact" 
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link custom-active' : 'nav-link'}
                        >
                            Contact Me
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a 
                            href = "#about" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link custom-active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item p-1">
                        <a className="nav-link" href ={resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            )
            : (
                <></>
            )}
        </nav>
    )
}
}