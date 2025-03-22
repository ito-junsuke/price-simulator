import React, { useState } from 'react';

const plans = {
  '0:00~5:00': [2750, 5000, 7500, 9500, 15000],
  '5:00~12:00': [3000, 5500, 8000, 9500, 16000],
  '12:00~18:00': [3250, 6000, 8500, 10500, 17000],
  '18:00~24:00': [3500, 6500, 9500, 11000, 18000],
  '24時間OK': [3980, 7000, 9800, 13000, 19800],
};

const planNames = [
  'ビギナー（チケット2枚）',
  'ライト（チケット4枚）',
  'アクティブ（チケット7枚）',
  'ハード（チケット10枚）',
  'VIP（チケット無制限）'
];

export default function PriceSimulator() {
  const [time, setTime] = useState('0:00~5:00');
  const [frequency, setFrequency] = useState(0);
  const [price, setPrice] = useState(plans['0:00~5:00'][0]);

  const calculatePrice = (selectedTime, selectedFrequency) => {
    const price = plans[selectedTime][selectedFrequency];
    setPrice(price);
  };

  return (
    <div className="p-10 bg-black rounded-xl shadow-lg text-white text-center">
      <label className="block mb-4 text-xl">利用時間帯：</label>
      <select
        className="p-3 mb-6 border rounded text-black text-xl"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          calculatePrice(e.target.value, frequency);
        }}
      >
        {Object.keys(plans).map((timeOption) => (
          <option key={timeOption} value={timeOption}>{timeOption}</option>
        ))}
      </select>
      <label className="block mb-4 text-xl">コース：</label>
      <select
        className="p-3 mb-6 border rounded text-black text-xl"
        value={frequency}
        onChange={(e) => {
          setFrequency(Number(e.target.value));
          calculatePrice(time, Number(e.target.value));
        }}
      >
        {planNames.map((name, index) => (
          <option key={index} value={index}>{name}</option>
        ))}
      </select>
      <div className="mt-6 text-2xl">
        料金：<span className="font-bold">{price.toLocaleString()}円</span>（1回あたり{Math.round(price / parseInt(planNames[frequency].match(/\d+/) || 1)).toLocaleString()}円）
      </div>
    </div>
  );
}
