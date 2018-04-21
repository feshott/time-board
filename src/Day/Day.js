import React, { Component } from 'react'
import './Day.css'

export default class Day extends Component {
  constructor(){
    super()
    this.state={
      reservedList:[
        ['09:00',false],
        ['10:00',false],
        ['11:00',false],
        ['12:00',false],
        ['13:00',false],
        ['14:00',false],
        ['15:00',false],
        ['16:00',false],
        ['17:00',false],
        ['18:00',false]
      ]
    }
  }

  toggleReserved=(e)=>{
    const newReservedList = this.state.reservedList

    newReservedList[e.target.dataset.reserved][1] = !newReservedList[e.target.dataset.reserved][1]

    this.setState({
      reservedList : newReservedList
    })
  }

  render(){

    const { reservedList } = this.state

    return(

      <div className='day_wrapper'>

        {reservedList.map((e,index)=>{
          return  <div  key={index}
                        data-reserved={index} 
                        onClick={this.toggleReserved}
                        className={`time time_${index+1} ${ e[1] ? 'time_reserved' : '' }`}>{e[0]}
                  </div>
        })}

      </div>
    );
  }
}