import React from "react";
import {FaArrowDown} from 'react-icons/fa';

// Renders the landing page
export default function Home({handlePageChange}){
    return(
        <section id="landing-page" className ="container-fluid">
            <div className="landing-text">
                <h2>I'm Emily (she/her) and I'm a Full Stack Web Developer</h2>
                <a href = "#portfolio" onClick={() => handlePageChange('Portfolio')}> 
                    See my Work <FaArrowDown />
                </a>
            </div>
        </section>
    )
}