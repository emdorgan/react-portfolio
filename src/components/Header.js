import React from "react";
import Nav from './Nav';

export default function Header({ currentPage, handlePageChange }){
    return(
        <header>
            <div>
                <a href="#home"><h1>Emily Dorgan</h1></a>
                <a href="#home"><div>img placeholder</div></a>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </header>
    )
}