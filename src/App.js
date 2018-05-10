import React, { Component } from 'react';
import Week from './Week/Week';
import DateApp from './DateApp/DateApp';
import './App.css';
import rooms from './data/rooms'

export default class App extends Component {
  state = {
    reservedTime: {
      Синяя : [],
      Красная : [],
      Желтая : [],
      Зеленая : []
    },
    weekState: 0
  }

  toggleReserved = (e) => {
    const reservedTime = this.state.reservedTime
    const resevedTimeData = +e.target.dataset.time
    const resevedRoomName = e.target.dataset.room

    if (resevedTimeData && (reservedTime[resevedRoomName].indexOf(resevedTimeData) !== -1)) {
      reservedTime[resevedRoomName].splice(reservedTime[resevedRoomName].indexOf(resevedTimeData), 1)
      this.setState({ reservedTime })
    } else if (resevedTimeData) {
      reservedTime[resevedRoomName].push(+resevedTimeData)
      this.setState({ reservedTime })
    }
  }

  handleWeek = (e) => {
    const action = e.target.dataset.week
    let weekState = this.state.weekState
    
    if (action === 'back') {
      weekState -=  604800000
    } else if (action === 'next') {
      weekState += 604800000
    }
    this.setState({ weekState })
  }
  
  // получаем понедельник 9 утра в неделе нашей даты в милисекундах
  setMonday = () => {
    // Получаем сегодняшнюю дату
    const nowDate = new Date()
    // Получаем 9 утра нашей даты
    const correctDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 9)
    // Получаем 9 утра нашей даты в миллисекундах
    const correctDateMiliseconds = correctDate.getTime()
    const dayNow = nowDate.getDay()
    // 24 часа == 86400000 миллисекунд
    const dayCounter = {
      0: (correctDateMiliseconds - (6 * (86400000))),
      1: correctDateMiliseconds,
      2: (correctDateMiliseconds - (86400000)),
      3: (correctDateMiliseconds - (2 * (86400000))),
      4: (correctDateMiliseconds - (3 * (86400000))),
      5: (correctDateMiliseconds - (4 * (86400000))),
      6: (correctDateMiliseconds - (5 * (86400000))),
    }

    return dayCounter[dayNow]
  }


  render() {
    const startDayMonday = this.setMonday()
    const { weekState, reservedTime } = this.state

    return (
      <div className="App">
        <DateApp
          monthName={startDayMonday + weekState}
          setWeekFunction={this.handleWeek} />

        {new Array(4).fill('').map((el, i) => 
          <Week
            key={i}
            reservedTime={reservedTime}
            timeFunction={this.toggleReserved}
            startTime={startDayMonday + weekState}
            roomName={rooms[i].name}
            roomMaxPeople={rooms[i].maxPeople} />)
        }
      </div>
    );
  }
}