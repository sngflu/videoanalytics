import { Link } from 'react-router-dom';
import cat from '../../../assets/cat.jpg'

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '15px',
            borderBottom: '1px solid #ccc'
        }}>
            <div>

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