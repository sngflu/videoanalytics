import { useParams } from 'react-router-dom';
import BasePage from '../basePage/basePage';
import EventsList from '../events/eventsList';
import SensorsStatus from '../sensors/sensorsStatus';
import FloorMap from '../map/floorMap';
import CameraImage from '../camera/camera';
import './floorPage.css'

const FloorPage = () => {
    const { floor } = useParams();

    return (
        <BasePage>
            <div className="content-container">
                <div className="left-container">
                    <div className="camera-image-container">
                        <CameraImage floor={floor} />
                    </div>
                    <div className="events-list-container">
                        <EventsList floor={floor} />
                    </div>
                </div>
                <div className="right-container">
                    <div className="floor-map-container">
                        <FloorMap floor={floor} />
                    </div>
                    <div className="sensors-status-container">
                        <SensorsStatus floor={floor} />
                    </div>
                </div>
            </div>
        </BasePage>
    );
};

export default FloorPage;
