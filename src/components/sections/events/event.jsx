import eye from '../../../assets/eye.svg'
import PropTypes from 'prop-types';

const getEventStyle = (eventType) => {
    switch (eventType) {
        case "neutral":
            return { backgroundColor: "#219653" };
        case "suspicious":
            return { backgroundColor: "#f2c94c" };
        case "danger":
            return { backgroundColor: "#ff0000" };
        default:
            return { backgroundColor: "gray" };
    }
};

const Event = ({ event }) => {
    const { floor, time, eventType, description, cameraLink } = event;
    const eventStyle = getEventStyle(eventType);

    return (
        <div style={{
            ...eventStyle,
            display: "flex",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "10px",
            fontSize: "25px",
            fontWeight: 'semibold'
        }}>
            <p>{floor} этаж {time}</p>
            <p style={{ flex: 1, margin: "0 10px" }}>{description}</p>
            <a href={cameraLink} target="_blank" rel="noopener noreferrer">
                <img src={eye} alt="Camera" style={{ width: "40px" }} />
            </a>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.shape({
        floor: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        eventType: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        cameraLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default Event;
