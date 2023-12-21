import { useState } from 'react';
import Navbar from '../main/navbar/navbar';

const Main = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div>
            <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        </div>
    );
};

export default Main;
