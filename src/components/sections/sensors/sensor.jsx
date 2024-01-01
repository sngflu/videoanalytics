import PropTypes from 'prop-types';
import people from '../../../assets/sensors/people.svg';
import guns from '../../../assets/sensors/guns.svg';
import fire from '../../../assets/sensors/fire.svg';
import deviant from '../../../assets/sensors/deviant.svg';
import furniture from '../../../assets/sensors/furniture.svg';

const Sensor = ({ sensor }) => {
    const { type, value } = sensor;
    const images = {
        peopleCount: people,
        weaponsSituation: guns,
        fireSafetySituation: fire,
        deviantBehaviorSituation: deviant,
        furnitureSituation: furniture,
    };

    const getBackgroundColor = () => {
        return value === 'ALERT' ? 'red' : '#f2f2f2';
    };

    const getColor = () => {
        return value === 'ALERT' ? 'black' : 'green';
    };

    return (
        <div style={{
            display: 'flex',
            border: '1px solid #e3e3e3',
            backgroundColor: getBackgroundColor(),
            padding: '20px',
            margin: '5px',
            textAlign: 'center',
            width: '150px',
            height: '150px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '25px',
            color: getColor(),
        }}>
            <img src={images[type]} alt={type} style={{ width: '100px', height: '100px', paddingTop: '20px' }} />
            <p>{value}</p>
        </div>
    );
};

Sensor.propTypes = {
    sensor: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]).isRequired,
    }).isRequired,
};

export default Sensor;
