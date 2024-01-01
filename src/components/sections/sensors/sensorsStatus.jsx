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

    const getPeopleCount = () => {
        const peopleSensor = sensors.find(({ type }) => type === 'peopleCount');
        return peopleSensor ? peopleSensor.floors.reduce((totalPeople, { value }) => totalPeople + value, 0) : 0;
    };

    const getAlertStatus = (sensorType) => {
        const sensor = sensors.find(({ type }) => type === sensorType);
        return sensor ? (sensor.floors.some(({ value }) => value !== 'normal') ? 'ALERT' : 'Normal') : 'Normal';
    };

    const getTotalFurnitureCount = () => {
        const furnitureSensor = sensors.find(({ type }) => type === 'furnitureSituation');
        return furnitureSensor ? furnitureSensor.floors.reduce((totalFurniture, { value }) => totalFurniture + value, 0) : 0;
    };

    const sensorTypes = [
        { type: 'peopleCount', getValue: getPeopleCount },
        { type: 'weaponsSituation', getValue: () => getAlertStatus('weaponsSituation') },
        { type: 'fireSafetySituation', getValue: () => getAlertStatus('fireSafetySituation') },
        { type: 'deviantBehaviorSituation', getValue: () => getAlertStatus('deviantBehaviorSituation') },
        { type: 'furnitureSituation', getValue: getTotalFurnitureCount },
    ];

    return (
        <div style={{ border: '1px solid #E5E5E5', padding: '10px', marginBottom: '20px', borderRadius: "10px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}>
            <h2 style={{ textAlign: 'center', fontSize: "40px" }}>Sensors Status</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {sensorTypes.map(({ type, getValue }) => (
                    <Sensor key={type} sensor={{ type, value: getValue() }} />
                ))}
            </div>
        </div>
    );
};

export default SensorsStatus;
