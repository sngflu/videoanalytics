import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_nva from '../../../assets/logo_nva.svg';
import './navbar.css';

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`navbar ${isHovered ? 'open' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                <Link to="/floor/4">
                    <button>4 этаж</button>
                </Link>
                <Link to="/floor/3">
                    <button>3 этаж</button>
                </Link>
                <Link to="/floor/2">
                    <button>2 этаж</button>
                </Link>
                <Link to="/floor/1">
                    <button>1 этаж</button>
                </Link>
                <Link to="/floor/0">
                    <button>0 этаж</button>
                </Link>
            </div>
            <div className="bottom-menu">
                <button>Настройки</button>
                <button>Выйти</button>
            </div>
        </div>
    );
}
