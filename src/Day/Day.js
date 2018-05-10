import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {
  
  state = {
    reservedList: [
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00'
    ]
  }

  setDayWeek = (time) => {
    const nowDay = new Date(time)
    const weekDay = nowDay.toLocaleString('ru', {weekday: 'long'})

    return `${nowDay.getDate()} ${weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}`
  }

  render() {
    const { reservedList } = this.state
    const { dayTime, roomName, timeFunctionWeek, reservedTime } = this.props
    return (
      <div className="day_wrapper">

        <div className="day_info">{this.setDayWeek(dayTime)}</div>

        <div className='day_time_wrapper'>
          {reservedList.map((e, index) => {
            return <div
              key={index}
              data-room={roomName}
              data-reserved={index}
              data-time={dayTime + (index * 3600000)}
              onClick={timeFunctionWeek}
              className={`time time_${index + 1} ${(reservedTime[roomName].indexOf(dayTime + (index * 3600000))) !== -1 ? 'time_reserved' : ''}`}>{e}
            </div>
          })}
        </div>
      </div>
    );
  }
}