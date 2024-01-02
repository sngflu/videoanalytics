import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseEvents } from '../../../api/eventsParser';
import Event from './event';

const EventsList = ({ floor }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const parsedEvents = parseEvents();
            setEvents(parsedEvents);
        };

        fetchData();
    }, []);

    const maxEventsListHeight = floor ? '30vh' : '70vh';

    const filteredEvents = floor ? events.filter((event) => event.floor === Number(floor)) : events;

    return (
        <div style={{ border: '1px solid #E5E5E5', padding: '10px', borderRadius: '10px', paddingLeft: '10px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Events List</h2>
            <div style={{ maxHeight: maxEventsListHeight, width: '40vw', overflowY: 'auto' }}>
                {filteredEvents.map((event) => (
                    <Event key={event.time} event={event} />
                ))}
            </div>
        </div>
    );
};

EventsList.propTypes = {
    floor: PropTypes.number,
};

export default EventsList;
