import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';

// This allows me to access the body tag and set it's styling.
document.body.style = "font-family: Georgia, 'Times New Roman', Times, serif; background-color: #121212;";

// Renders the contents of the page conditionally using useState. About page is rendered by default as per request in the assignment
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home handlePageChange={handlePageChange} />;
        }
        if(currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        else {
            return <Portfolio />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="app">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}