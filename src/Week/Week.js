import React, { Component } from 'react'
import Day from '../Day/Day'
import './Week.css'

export default class Week extends Component {
  constructor(prop){
    super(prop)
    this.state={
        
    }
  }

  render(){
    return(
      <div className='week_wrapper'>
        <div className="week_info">
          <div className="week_title">{this.props.roomName}</div>
          <div className="week_subtitle">(до {this.props.roomMaxPeople} персон)</div>
        </div>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
      </div>
    );
  }
}