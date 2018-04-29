import React, { Component } from 'react'
import './DateApp.css';

export default class DateApp extends Component {

  render() {
    return (
      <div className='date_wrapper'>

        <div className="date_title">Комната</div>

        <div className="date_week_wrapper">
          <div className="date_btn_back">&#9668;</div>
          <div className="date_month">Июль</div>
          <div className="date_btn_next">&#9658;</div>
        </div>

      </div>
    );
  }
}