import BasePage from '../basePage/basePage';
import EventsList from '../events/eventsList';
import SensorsStatus from '../sensors/sensorsStatus';
import './MainPage.css'

const MainPage = () => {
    return (
        <BasePage>
            <div className="content-container">
                <div className="events-container">
                    <EventsList />
                </div>
                <div className="sensors-container">
                    <SensorsStatus />
                </div>
            </div>
        </BasePage>
    );
};

export default MainPage;
