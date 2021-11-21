import React, { useState } from 'react';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <Home />;
        }
        if(currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        else {
            return <Projects />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            the page
        </div>
    )
}