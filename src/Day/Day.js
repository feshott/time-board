import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {
  constructor(){
    super()
    this.state={
        
    }
  }

  render(){
    return(
      <div className='day_wrapper'>
        <div className="time time_1">09:00</div>
        <div className="time time_2">10:00</div>
        <div className="time time_3">11:00</div>
        <div className="time time_4">12:00</div>
        <div className="time time_5 time_active">13:00</div>
        <div className="time time_6">14:00</div>
        <div className="time time_7">15:00</div>
        <div className="time time_8">16:00</div>
        <div className="time time_9">17:00</div>
        <div className="time time_10">18:00</div>
      </div>
    );
  }
}