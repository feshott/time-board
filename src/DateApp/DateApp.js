import React, { Component } from 'react'
import './DateApp.css';

export default class DateApp extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className='date'>

        <div className="date_title">Комната</div>

        <div className="date_info">

          <div className="date_week_wrapper">
            <div className="date_btn_back">&#9668;</div>
            <div className="date_month">Июль</div>
            <div className="date_btn_next">&#9658;</div>
          </div>

          <div className="date_day_wrapper">
            <div className="date_day">12 среда</div>
            <div className="date_day">13 четверг</div>
            <div className="date_day">14 пятница</div>
            <div className="date_day">15 суббота</div>
            <div className="date_day">16 воскресение</div>
          </div>

        </div>

      </div>
    );
  }
}