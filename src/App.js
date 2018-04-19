import React, { Component } from 'react';
import Week from './Week/Week'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Week roomName={'Синяя'} roomMaxPeople={'10'}/>
      </div>
    );
  }
}