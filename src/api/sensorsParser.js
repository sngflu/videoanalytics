import sensorData from '../data/sensors.json';

export const parseSensors = () => {
    try {
        const sensors = sensorData.sensors;
        return sensors;
    } catch (error) {
        console.error('Error parsing sensors:', error);

        return [];
    }
};