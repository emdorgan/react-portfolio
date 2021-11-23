import React, { useState } from "react";
import resume from './pdf/emd-resume.pdf'
import {FaBars} from 'react-icons/fa'


// Nav contains a boolean useState for the drop-down menu which conditionally renders the <ul> element
export default function Nav({ currentPage, handlePageChange }){

    const [dropdown, setDropdown] = useState(false);
    
    const toggleDropdown = () => {
        console.log(dropdown)
        if(dropdown){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    }

    return(
        <nav id="navbarNav">
            <FaBars className="toggler" onClick={toggleDropdown} />
            {dropdown ? (<ul className="navbar-nav custom-align">
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