import React from "react";
import Nav from './Nav';

export default function Header({ currentPage, handlePageChange }){
    return(
        <header className="navbar navbar-expand-lg text-white fixed-top nav-custom">
            <div>
                <a href="#home" onClick={() => handlePageChange('Home')}>
                    <h1>Emily Dorgan</h1>
                </a>
                <a href="#home" onClick={() => handlePageChange('Home')}>
                    <div>img placeholder</div>
                </a>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </header>
    )
}