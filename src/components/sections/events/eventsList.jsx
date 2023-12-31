import { useState, useEffect } from 'react';
import { parseEvents } from '../../../api/eventsParser';
import Event from './event';

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const parsedEvents = parseEvents();
            setEvents(parsedEvents);
        };

        fetchData();
    }, []);

    return (
        <div >
            <h2 style={{ textAlign: 'center' }}>Events List</h2>
            <div style={{ maxHeight: '80vh', width: '40vw', overflowY: 'auto' }}>
                {events.map((event) => (
                    <Event key={event.time} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventsList;
