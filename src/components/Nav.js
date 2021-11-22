import React from "react";

export default function Nav({ currentPage, handlePageChange }){
    return(
        <nav>
            <div>
                <ul>
                    <li>
                        <a 
                            href = "#portfolio" 
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a 
                            href = "#contact" 
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact Me
                        </a>
                    </li>
                    <li>
                        <a 
                            href = "#about" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                            Resume
                    </li>
                </ul>
            </div>
        </nav>
    )
}