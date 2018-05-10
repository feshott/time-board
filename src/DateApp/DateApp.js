import React from 'react'
import './DateApp.css';

const DateApp = ({ monthName, setWeekFunction }) => {

  const setNameMonth = (time) => {
    const nowDay = new Date(time)
    const monthName = nowDay.toLocaleString('ru', {month: 'long'})

    return `${monthName.charAt(0).toUpperCase() + monthName.slice(1)}`
  }

  return (
    <div className='date_wrapper'>

      <div className="date_title">Комната</div>

      <div className="date_week_wrapper">
        <div data-week='back' onClick={setWeekFunction} className="date_btn_back">&#9668;</div>
        <div className="date_month">{setNameMonth(monthName)}</div>
        <div data-week='next' onClick={setWeekFunction} className="date_btn_next">&#9658;</div>
      </div>

    </div>)
}

export default DateApp