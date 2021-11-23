import React from "react";
import Nav from './Nav';
import profilePic from './images/profile.jpg'

// Header component which contains my name, profile (which link to the home page) and includes a Nav component.
// The header recieves the currentPage and handlePageChange state and passes them along to the Nav component
export default function Header({ currentPage, handlePageChange }){
    return(
        <header className="navbar navbar-expand-lg text-white fixed-top nav-custom">
            <div className="container-fluid">
                <a className="navbar-brand my-name" href="#home" onClick={() => handlePageChange('Home')}>
                    <h1>Emily Dorgan</h1>
                </a>
                <a href="#home" onClick={() => handlePageChange('Home')}>
                    <img className="profile" src={profilePic} alt="profile" />
                </a>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </header>
    )
}