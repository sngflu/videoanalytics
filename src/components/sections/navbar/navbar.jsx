import { useState } from 'react';
import PropTypes from 'prop-types';
import logo_nva from '../../../assets/logo_nva.svg';
import full_logo_nva from '../../../assets/navbar/full_logo_nva.svg';
import dashboardClosed from '../../../assets/navbar/dashboard_button.svg';
import dashboardOpen from '../../../assets/navbar/dashboard_open_button.svg';
import homeClosed from '../../../assets/navbar/home_button.svg';
import homeOpen from '../../../assets/navbar/home_open_button.svg';
import settings from '../../../assets/navbar/settings.svg';
import logout from '../../../assets/navbar/logout.svg';
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

    const compactVariation = !isHovered;

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
                <img
                    src={compactVariation ? logo_nva : full_logo_nva}
                    alt="Логотип"
                    className={`${compactVariation ? 'closed' : 'open'}`}
                />
            </div>
            <div className="menu">
                <a href="/dashboard">
                    <button>
                        <img
                            src={compactVariation ? dashboardClosed : dashboardOpen}
                            alt="Панель управления"
                            className={`${compactVariation ? 'closed' : 'open'}`}
                        />
                    </button>
                </a>
                <a href="/main">
                    <button>
                        <img
                            src={compactVariation ? homeClosed : homeOpen}
                            alt="На главную"
                            className={`${compactVariation ? 'closed' : 'open'}`}
                        />
                    </button>
                </a>
                {floorButtons.map((item) => (
                    <a key={item.floor} href={`/floor/${item.floor}`}>
                        <button className={`${compactVariation ? 'closed' : 'open'}`}>
                            {compactVariation ? `${item.floor} эт.` : `${item.floor} этаж`}
                        </button>
                    </a>
                ))}
            </div>
            <div className="bottom-menu">
                <a href="/settings">
                    <button className={`${compactVariation ? 'closed' : 'open'}`}>
                        <img src={settings} alt="Настройки" />
                        {isHovered && <span>Настройки</span>}
                    </button>
                </a>
                <a href="/">
                    <button className={`logout-button ${compactVariation ? 'closed' : 'open'}`}>
                        <img src={logout} alt="Выйти" />
                        {isHovered && <span>Выйти</span>}
                    </button>
                </a>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    setIsNavbarOpen: PropTypes.func.isRequired,
};

export default Navbar;
