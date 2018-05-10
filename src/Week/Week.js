import React from 'react'
import Day from '../Day/Day'
import './Week.css'

const Week = ({ roomName, reservedTime, timeFunction, startTime, roomMaxPeople }) => 

    <div className='week_wrapper'>
      <div className="week_info">
        <div className="week_title">{roomName}</div>
        <div className="week_subtitle">(до {roomMaxPeople} персон)</div>
      </div>

      {new Array(5).fill('').map((el, i) =>
        <Day
          key={i}
          reservedTime={reservedTime}
          timeFunctionWeek={timeFunction}
          dayTime={startTime + 86400000 * i}
          roomName={roomName} />
      )}

    </div>

export default Week