import React, { Component } from 'react';
import PetCalendar from '../../components/calendar';
import './index.css';


class Schedule extends Component {

  render() {
    return (
      <div>
        <h2>Select your service:</h2>
        <PetCalendar />
      </div>
    )
  }
}

export default Schedule;
