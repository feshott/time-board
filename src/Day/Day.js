import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reservedTime: this.props.reservedTime,
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
  }

  setDayWeek = (time) => {
    const nowDay = new Date(time)

    const weekDay = [
      'Воскресение',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница'
    ]

    return (nowDay.getDate() + ' ' + weekDay[nowDay.getDay()])
  }

  render() {
    const { reservedList } = this.state

    return (
      <div className="day_wrapper">

        <div className="day_info">{this.setDayWeek(this.props.dayTime)}</div>

        <div className='day_time_wrapper'>
          {reservedList.map((e, index) => {
            return <div
              key={index}
              data-reserved={index}
              data-time={this.props.dayTime + (index * 3600000)}
              onClick={this.props.timeFunctionWeek}
              className={`time time_${index + 1} ${(this.state.reservedTime.indexOf(this.props.dayTime + (index * 3600000))) !== -1 ? 'time_reserved' : ''}`}>{e}
            </div>
          })}
        </div>
      </div>
    );
  }
}