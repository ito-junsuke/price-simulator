import React, { useState } from 'react';
import './App.css';

const priceTable = {
    "深夜・早朝（0:00~5:00）": {
        "ビギナー": { count: "2回", price: 2750 },
        "ライト": { count: "4回", price: 5000 },
        "アクティブ": { count: "7回", price: 7500 },
        "ハード": { count: "10回", price: 9500 },
        "VIP": { count: "無制限", price: 15000 }
    },
    "朝（5:00~12:00）": {
        "ビギナー": { count: "2回", price: 3000 },
        "ライト": { count: "4回", price: 5500 },
        "アクティブ": { count: "7回", price: 8000 },
        "ハード": { count: "10回", price: 9500 },
        "VIP": { count: "無制限", price: 16000 }
    },
    "昼（12:00~18:00）": {
        "ビギナー": { count: "2回", price: 3250 },
        "ライト": { count: "4回", price: 6000 },
        "アクティブ": { count: "7回", price: 8500 },
        "ハード": { count: "10回", price: 10500 },
        "VIP": { count: "無制限", price: 17000 }
    },
    "夜（18:00~0:00）": {
        "ビギナー": { count: "2回", price: 3500 },
        "ライト": { count: "4回", price: 6500 },
        "アクティブ": { count: "7回", price: 9500 },
        "ハード": { count: "10回", price: 11000 },
        "VIP": { count: "無制限", price: 18000 }
    },
    "フルタイム（0:00~24:00）": {
        "ビギナー": { count: "2回", price: 3980 },
        "ライト": { count: "4回", price: 7000 },
        "アクティブ": { count: "7回", price: 9800 },
        "ハード": { count: "10回", price: 13000 },
        "VIP": { count: "無制限", price: 19800 }
    }
};

const App = () => {
    const [selectedTime, setSelectedTime] = useState("深夜・早朝（0:00~5:00）");
    const [selectedPlan, setSelectedPlan] = useState("ビギナー");
    const [price, setPrice] = useState(priceTable[selectedTime][selectedPlan].price);
    const [count, setCount] = useState(priceTable[selectedTime][selectedPlan].count);

    const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setSelectedTime(newTime);
        setPrice(priceTable[newTime][selectedPlan].price);
        setCount(priceTable[newTime][selectedPlan].count);
    };

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
        setPrice(priceTable[selectedTime][plan].price);
        setCount(priceTable[selectedTime][plan].count);
    };

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
                        onClick={() => handlePlanClick(plan)}
                    >
                        {plan}
                        <br />
                        {priceTable[selectedTime][plan].count}
                    </button>
                ))}
            </div>

            <div className="price">
                月額 <span className="price-value">{price.toLocaleString()}</span>円
            </div>
            <div className="price-per-session">
                {selectedPlan !== "VIP" && `（1回あたり${Math.floor(price / parseInt(count))}円）`}
                {selectedPlan === "VIP" && `（1日あたり${Math.floor(price / 30)}円）`}
            </div>
        </div>
    );
};

export default App;
