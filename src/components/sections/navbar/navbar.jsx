import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo_nva from '../../../assets/logo_nva.svg';
import './navbar.css';

const Navbar = ({ setIsNavbarOpen }) => {
    const [isHovered, setIsHovered] = useState(false);

    const floorButtons = [
        { floor: 4, label: '4 этаж' },
        { floor: 3, label: '3 этаж' },
        { floor: 2, label: '2 этаж' },
        { floor: 1, label: '1 этаж' },
        { floor: 0, label: '0 этаж' },
    ];

    return (
        <div
            className={`navbar ${isHovered ? 'open' : ''}`}
            onMouseEnter={() => {
                setIsHovered(true);
                setIsNavbarOpen(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsNavbarOpen(false);
            }}
        >
            <div className="logo">
                <img src={logo_nva} alt="Логотип" />
            </div>
            <div className="menu">
                <Link to="/dashboard">
                    <button>Панель управления</button>
                </Link>
                <Link to="/main">
                    <button>На главную</button>
                </Link>
                {floorButtons.map((item) => (
                    <Link key={item.floor} to={`/floor/${item.floor}`}>
                        <button>{item.label}</button>
                    </Link>
                ))}
                <Link to="/settings">
                    <button>Настройки</button>
                </Link>
                <Link to="/">
                    <button>Выйти</button>
                </Link>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    setIsNavbarOpen: PropTypes.func.isRequired,
};

export default Navbar;
