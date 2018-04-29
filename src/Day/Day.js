import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {
  constructor() {
    super()
    this.state = {
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


  render() {

    const { reservedList } = this.state

    return (

      <div className='day_wrapper'>

        {reservedList.map((e, index) => {
          return <div
            key={index}
            data-reserved={index}
            data-time={this.props.dayTime + (index * 3600000)}
            className={`time time_${index + 1}`}>{e}
          </div>
        })}

      </div>
    );
  }
}