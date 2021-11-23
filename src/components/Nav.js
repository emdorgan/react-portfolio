import React from "react";
import resume from './pdf/emd-resume.pdf'

export default function Nav({ currentPage, handlePageChange }){
    return(
        <nav className="collapse navbar-collapse custom-align" id="navbarNav">
            <ul className="navbar-nav custom-align">
                <li className="nav-item p-1">
                    <a 
                        href = "#portfolio" 
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                </li>
                <li className="nav-item p-1">
                    <a 
                        href = "#contact" 
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact Me
                    </a>
                </li>
                <li className="nav-item p-1">
                    <a 
                        href = "#about" 
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item p-1">
                    <a className="nav-link" href ={resume} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}