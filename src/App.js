import React, { Component } from 'react';
import Week from './Week/Week';
import DateApp from './DateApp/DateApp';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <DateApp/>
        <Week roomName={'Синяя'} roomMaxPeople={'10'}/>
      </div>
    );
  }
}