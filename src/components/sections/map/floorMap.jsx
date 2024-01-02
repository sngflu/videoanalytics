import PropTypes from 'prop-types';
import floor0 from '../../../assets/maps/floor0.jpg';
import floor1 from '../../../assets/maps/floor1.jpg';
import floor2 from '../../../assets/maps/floor2.jpg';
import floor3 from '../../../assets/maps/floor3.jpg';
import floor4 from '../../../assets/maps/floor4.jpg';
import './floorMap.css'

const floorMaps = {
    0: floor0,
    1: floor1,
    2: floor2,
    3: floor3,
    4: floor4,
};

const FloorMap = ({ floor }) => {
    const map = floorMaps[floor];

    return (
        <div className='map-container'>
            <img src={map} alt={`Floor ${floor} Map`} style={{ width: '90%' }} />
        </div>
    );
};

FloorMap.propTypes = {
    floor: PropTypes.number.isRequired,
};

export default FloorMap;