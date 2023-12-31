import eventData from '../data/events.json';

export const parseEvents = () => {
    try {
        const events = eventData.events;

        return events;
    } catch (error) {
        console.error('Error parsing events:', error);

        return [];
    }
};