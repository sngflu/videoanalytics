import PropTypes from 'prop-types';
import camera from '../../../assets/cameras/camera.jpg';
import './camera.css'


const CameraImage = ({ cameraId, location }) => {

    return (
        <div className='camera-container'>
            <img src={camera} style={{ width: '85%' }} />
        </div>
    );
};

CameraImage.propTypes = {
    cameraId: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
};

export default CameraImage;
