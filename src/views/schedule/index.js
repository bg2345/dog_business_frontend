import React, { Component } from 'react';
import PetCalendar from '../../components/calendar';
import './index.css';


class Schedule extends Component {

  render() {
    return (
      <div>
        <h2>Schedule a visit:</h2>
        <PetCalendar />
      </div>
    )
  }
}

export default Schedule;
