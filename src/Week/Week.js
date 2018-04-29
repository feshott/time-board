import React, { Component } from 'react'
import Day from '../Day/Day'
import './Week.css'

export default class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='week_wrapper'>
        <div className="week_info">
          <div className="week_title">{this.props.roomName}</div>
          <div className="week_subtitle">(до {this.props.roomMaxPeople} персон)</div>
        </div>

        <Day
          reservedTime={this.props.reservedTime}
          timeFunctionWeek={this.props.timeFunction}
          dayTime={this.props.startTime} />
        <Day
          reservedTime={this.props.reservedTime}
          timeFunctionWeek={this.props.timeFunction}
          dayTime={this.props.startTime + 86400000} />
        <Day
          reservedTime={this.props.reservedTime}
          timeFunctionWeek={this.props.timeFunction}
          dayTime={this.props.startTime + 86400000 * 2} />
        <Day
          reservedTime={this.props.reservedTime}
          timeFunctionWeek={this.props.timeFunction}
          dayTime={this.props.startTime + 86400000 * 3} />
        <Day
          reservedTime={this.props.reservedTime}
          timeFunctionWeek={this.props.timeFunction}
          dayTime={this.props.startTime + 86400000 * 4} />
      </div>
    );
  }
}