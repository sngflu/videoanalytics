import { Link } from 'react-router-dom';
import cat from '../../../assets/cat.jpg';

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            fontSize: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            borderBottom: '1px solid #ccc',
        }}>
            <div>
                <h2>Welcome back!</h2>
            </div>
            <div>
                <Link to="/settings">
                    <img src={cat} alt="User Avatar" style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
                </Link>
            </div>
        </div>
    );
};

export default Header;
