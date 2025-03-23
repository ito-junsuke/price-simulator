import React, { useState } from "react";
import "./App.css";

const priceTable = {
  "深夜・早朝（0:00〜5:00）": {
    "2回": 2750,
    "4回": 5000,
    "7回": 7500,
    "10回": 9500,
    "無制限": 15000,
  },
  "朝（5:00〜12:00）": {
    "2回": 3000,
    "4回": 5500,
    "7回": 8000,
    "10回": 9500,
    "無制限": 16000,
  },
  "昼（12:00〜18:00）": {
    "2回": 3250,
    "4回": 6000,
    "7回": 8500,
    "10回": 10500,
    "無制限": 17000,
  },
  "夜（18:00〜0:00）": {
    "2回": 3500,
    "4回": 6500,
    "7回": 9500,
    "10回": 11000,
    "無制限": 18000,
  },
  "24時間": {
    "2回": 3980,
    "4回": 7000,
    "7回": 9800,
    "10回": 13000,
    "無制限": 19800,
  },
};

const App = () => {
  const [selectedTime, setSelectedTime] = useState(Object.keys(priceTable)[0]);
  const [selectedPlan, setSelectedPlan] = useState(Object.keys(priceTable[selectedTime])[0]);
  const [price, setPrice] = useState(priceTable[selectedTime][selectedPlan]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    const newPlan = Object.keys(priceTable[time])[0];
    setSelectedPlan(newPlan);
    setPrice(priceTable[time][newPlan]);
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setPrice(priceTable[selectedTime][plan]);
  };

  const calculatePerDay = (price) => Math.floor(price / 30);

  const pricePerSession =
    selectedPlan === "無制限" ? `1日あたり${calculatePerDay(price)}円` : `1回あたり${Math.floor(price / parseInt(selectedPlan))}円`;

  return (
    <div className="App">
      <div className="option-group">
        <h2 className="label">利用時間帯</h2>
        <div className="option-buttons">
          {Object.keys(priceTable).map((time) => (
            <button
              key={time}
              className={`option-button ${selectedTime === time ? "selected" : ""}`}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="option-group">
        <h2 className="label">月間利用回数</h2>
        <div className="option-buttons">
          {Object.keys(priceTable[selectedTime]).map((plan) => (
            <button
              key={plan}
              className={`option-button ${selectedPlan === plan ? "selected" : ""}`}
              onClick={() => handlePlanClick(plan)}
            >
              {plan}
            </button>
          ))}
        </div>
      </div>

      <p className="price">
        月額 <span className="price-value">{price.toLocaleString()}円</span>
        {pricePerSession && `（${pricePerSession}）`}
      </p>
    </div>
  );
};

export default App;
