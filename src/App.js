import React, { Component } from 'react';
import Week from './Week/Week';
import DateApp from './DateApp/DateApp';
import './App.css';

export default class App extends Component {
  
  
// получаем понедельник 9 утра в неделе нашей даты в милисекундах
setMonday = () => {
  // Получаем сегодняшнюю дату
  const nowDate = new Date()
  // Получаем 9 утра нашей даты
  const correctDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 9)
  // Получаем 9 утра нашей даты в миллисекундах
  const correctDateMiliseconds = correctDate.getTime()
  const dayNow = nowDate.getDay() + 7
  // 24 часа == 86400000 миллисекунд
  const dayCounter = {
    1: null,
    2: (correctDateMiliseconds - (86400000)),
    3: (correctDateMiliseconds - (2 * (86400000))),
    4: (correctDateMiliseconds - (3 * (86400000))),
    5: (correctDateMiliseconds - (4 * (86400000))),
    6: (correctDateMiliseconds - (5 * (86400000))),
    7: (correctDateMiliseconds - (6 * (86400000))),
  }
  const nowMonday = dayCounter[dayNow]
  return nowMonday
}



render() {
  const startDayMonday = this.setMonday()
    return (
      <div className="App">
        <DateApp/>
        <Week startTime={startDayMonday} roomName={'Синяя'} roomMaxPeople={'10'}/>
      </div>
    );
  }
}