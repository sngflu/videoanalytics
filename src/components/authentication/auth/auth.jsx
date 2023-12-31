import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/login';
import Signup from '../signup/signup';
import About from '../about/about';
import Main from '../../sections/mainPage/mainPage';
import './auth.css';

export default function Authentication() {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (user) => {
        console.log('User logged in:', user);
        setLoggedIn(true);
        navigate('/main');
    };

    return (
        <div className='bg'>
            <div>
                {isLoggedIn ? (
                    <Main />
                ) : isLogin ? (
                    <Login toggleForm={() => setIsLogin(false)} onLogin={handleLogin} />
                ) : (
                    <Signup toggleForm={() => setIsLogin(true)} />
                )}
            </div>
            <div>
                <About />
            </div>
        </div>
    );
}
