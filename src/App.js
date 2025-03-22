import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(2750);

  const handleTimeChange = (event) => {
    const time = event.target.value;
    switch (time) {
      case 'ミッドナイト':
        setPrice(2750);
        break;
      case 'モーニング':
        setPrice(3000);
        break;
      case 'デイ':
        setPrice(3250);
        break;
      case 'ナイト':
        setPrice(3500);
        break;
      case 'フルタイム':
        setPrice(3980);
        break;
      default:
        setPrice(2750);
    }
  };

  const handleCourseChange = (event) => {
    const course = event.target.value;
    switch (course) {
      case 'ビギナー':
        setPrice(price);
        break;
      case 'ライト':
        setPrice(price + 2250);
        break;
      case 'アクティブ':
        setPrice(price + 4750);
        break;
      case 'ハード':
        setPrice(price + 6750);
        break;
      case 'VIP':
        setPrice(price + 12000);
        break;
      default:
        setPrice(2750);
    }
  };

  return (
    <div style={{ fontFamily: 'Meiryo', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}>
      <h1 className="course-name">プラン/時間帯：</h1>
      <select className="select-box" onChange={handleTimeChange}>
        <option value="ミッドナイト">ミッドナイト（0:00～5:00）</option>
        <option value="モーニング">モーニング（5:00～12:00）</option>
        <option value="デイ">デイ（12:00～18:00）</option>
        <option value="ナイト">ナイト（18:00～0:00）</option>
        <option value="フルタイム">フルタイム（24時間OK）</option>
      </select>

      <h1 className="course-name">コース：</h1>
      <select className="select-box" onChange={handleCourseChange}>
        <option value="ビギナー">ビギナー（チケット2枚）</option>
        <option value="ライト">ライト（チケット4枚）</option>
        <option value="アクティブ">アクティブ（チケット7枚）</option>
        <option value="ハード">ハード（チケット10枚）</option>
        <option value="VIP">VIP（チケット無制限）</option>
      </select>

      <p className="price" style={{ fontSize: '28px', marginTop: '20px' }}>
        料金：{price.toLocaleString()}円
      </p>
    </div>
  );
}

export default App;
