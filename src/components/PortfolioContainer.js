import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';


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
            return <Project />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            {renderPage()}
            <Footer/>
        </div>
    )
}