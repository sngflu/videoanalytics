import { useState } from 'react';
import './signup.css';
import logo_nva from '../../../assets/logo_nva.svg';
import { signupUser } from '../../../api/auth';

export default function Signup({ toggleForm }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = await signupUser({
                firstName,
                lastName,
                patronymic,
                phoneNumber,
                email,
                password,
            });

            console.log('New user registered:', newUser);
            toggleForm();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='signup'>
            <div>
                <img src={logo_nva} alt="logo_nva" className='logo-image' />
                <p>NVA</p>
            </div>
            <div>
                <p>Welcome to NVA!</p>
                <p>Create your NVA account</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>First name:</label>
                    <br />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <br />
                    <label>Last name:</label>
                    <br />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <br />
                    <label>Patronymic:</label>
                    <br />
                    <input type="text" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
                    <br />
                    <label>Phone number:</label>
                    <br />
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br /><br />
                    <input type="submit" value="Create account" />
                </form>
            </div>
            <div>
                <p>Already have an account? <span onClick={toggleForm}>Sign in</span></p>
            </div>
        </div>
    );
}
