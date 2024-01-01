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
        <div style={{ border: '1px solid #E5E5E5', padding: '10px', borderRadius: "10px", paddingLeft: "10px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
            <h2 style={{ textAlign: 'center', fontSize: "30px" }}>Events List</h2>
            <div style={{ maxHeight: '60vh', width: '40vw', overflowY: 'auto' }}>
                {events.map((event) => (
                    <Event key={event.time} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventsList;
