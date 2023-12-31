import { useState } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import EventsList from '../events/eventsList';
import SensorsStatus from '../sensors/sensorsStatus';
import './mainPage.css';

const MainPage = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div className={`main-page ${isNavbarOpen ? 'navbar-open' : ''}`}>
            <div className="navbar-container">
                <Navbar setIsNavbarOpen={setIsNavbarOpen} />
            </div>
            <div className="main-content-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="content-container">
                    <div className="events-container">
                        <EventsList />
                    </div>
                    <div className="sensors-container">
                        <SensorsStatus />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
