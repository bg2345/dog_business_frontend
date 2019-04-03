import React, { Component } from 'react';
import './index.css';

class Appointments extends Component {
  render() {
    return (
      <div className='col-md-6 offset-3'>
      <h4>Scheduled Appointments</h4>
      <table className='appts-table'>
      <thead>
        <tr>
          <th className='appts-header'>Pet</th>
          <th className='appts-header'>Date</th>
          <th className='appts-header'>Service</th>
          <th className='appts-header'>Notes</th>
          <th className='appts-header'>Price</th>
        </tr>
      </thead>
      <tbody>



      </tbody>
    </table>
    </div>
    );
  }
}

export default Appointments;
