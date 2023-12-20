import React, { useState } from 'react';
import './login.css';
import logo_nva from '../../../assets/logo_nva.svg';
import { loginUser } from '../../../api/auth';

export default function Login({ toggleForm, onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await loginUser({ email, password });
            onLogin(user);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='login'>
            <div>
                <img src={logo_nva} alt="logo_nva" className='logo-image' />
                <p>NVA</p>
            </div>
            <div>
                <p>Welcome to NVA!</p>
                <p>Sign in to your NVA account</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br /><br />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div>
                <button onClick={toggleForm}>Create account</button>
                <span>Forgot password?</span>
            </div>
        </div>
    );
}
