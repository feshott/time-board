import React, { Component } from 'react'
import './DateApp.css';

export default class DateApp extends Component {

  setNameMonth = (time) => {
    const nowDay = new Date(time)

    const monthNameArr = [
      'Январь',
      'Февраль', 
      'Март', 
      'Апрель', 
      'Май', 
      'Июнь', 
      'Июль', 
      'Август', 
      'Сентябрь', 
      'Октябрь', 
      'Ноябрь', 
      'Декабрь'
    ]

    return (monthNameArr[nowDay.getMonth()])
  }

  render() {
    const monthName = this.setNameMonth(this.props.monthName)
    return (
      <div className='date_wrapper'>

        <div className="date_title">Комната</div>

        <div className="date_week_wrapper">
          <div data-week='back' onClick={this.props.setWeekFunction} className="date_btn_back">&#9668;</div>
          <div className="date_month">{monthName}</div>
          <div data-week='next' onClick={this.props.setWeekFunction} className="date_btn_next">&#9658;</div>
        </div>

      </div>
    );
  }
}