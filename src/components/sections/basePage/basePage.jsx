import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import './basePage.css';

const BasePage = ({ children }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div className={`base-page ${isNavbarOpen ? 'navbar-open' : ''}`}>
            <div className="navbar-container">
                <Navbar setIsNavbarOpen={setIsNavbarOpen} />
            </div>
            <div className="main-content-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="content-container">
                    {children}
                </div>
            </div>
        </div>
    );
};

BasePage.propTypes = {
    children: PropTypes.node,
};

export default BasePage;
