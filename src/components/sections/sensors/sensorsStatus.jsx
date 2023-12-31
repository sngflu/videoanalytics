import { useState, useEffect } from 'react';
import { parseSensors } from '../../../api/sensorsParser';
import Sensor from './sensor';

const SensorsStatus = () => {
    const [sensors, setSensors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const parsedSensors = parseSensors();
            setSensors(parsedSensors);
        };

        fetchData();
    }, []);

    return (
        <div style={{ border: '1px solid #E5E5E5', padding: '10px', marginBottom: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Sensors Status</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {sensors.map((sensor) => (
                    <Sensor key={sensor.type} sensor={sensor} />
                ))}
            </div>
        </div>
    );
};

export default SensorsStatus;
