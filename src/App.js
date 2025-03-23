import React, { useState } from 'react';
import './App.css';

const priceTable = {
    '深夜・早朝（0:00~5:00）': { '2回': 2750, '4回': 5000, '7回': 7500, '10回': 9500, '無制限': 15000 },
    '朝（5:00~12:00）': { '2回': 3000, '4回': 5500, '7回': 8000, '10回': 9500, '無制限': 16000 },
    '昼（12:00~18:00）': { '2回': 3250, '4回': 6000, '7回': 8500, '10回': 10500, '無制限': 17000 },
    '夜（18:00~0:00）': { '2回': 3500, '4回': 6500, '7回': 9500, '10回': 11000, '無制限': 18000 },
    '24時間': { '2回': 3980, '4回': 7000, '7回': 9800, '10回': 13000, '無制限': 19800 },
};

const App = () => {
    const [selectedTime, setSelectedTime] = useState(Object.keys(priceTable)[0]);
    const [selectedPlan, setSelectedPlan] = useState(Object.keys(priceTable[selectedTime])[0]);

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        setSelectedPlan(Object.keys(priceTable[event.target.value])[0]);
    };

    const handlePlanChange = (event) => {
        setSelectedPlan(event.target.value);
    };

    const price = priceTable[selectedTime][selectedPlan];
    const pricePerSession = selectedPlan === '無制限' ? Math.floor(price / 30) : Math.floor(price / parseInt(selectedPlan));

    return (
        <div className="container">
            <h1 className="label">利用時間帯</h1>
            <select className="dropdown" value={selectedTime} onChange={handleTimeChange}>
                {Object.keys(priceTable).map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <h1 className="label">月間利用回数</h1>
            <div className="button-group">
                {Object.keys(priceTable[selectedTime]).map((plan) => (
                    <button
                        key={plan}
                        className={`plan-button ${selectedPlan === plan ? 'selected' : ''}`}
                        onClick={() => setSelectedPlan(plan)}
                    >
                        {plan}
                    </button>
                ))}
            </div>

            <p className="price">
                月額 <span className="price-value">{price.toLocaleString()}円</span>
                {pricePerSession ? (
                    <span className="price-per-session">（1回あたり{pricePerSession}円）</span>
                ) : (
                    <span className="price-per-session">（1日あたり{pricePerSession}円）</span>
                )}
            </p>
        </div>
    );
};

export default App;
