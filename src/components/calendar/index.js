import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './index.css';


class PetCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      pet_name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }



  render() {
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-md-4 mx-auto'>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        </div>
        <div className="col-md-8 mx-auto mg-med">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="pet_name">Pet name</label>
              <input
                type="text"
                className="form-control"
                name="pet_name"
                placeholder="Enter your pet's name"
                value={this.state.pet_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="selection">Select Service:</label>
                              <select className="form-control" id="service">
                              <option>Walk</option>
                              <option>Light Grooming</option>
                              <option>Other (Specify in notes)</option>
                              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Street Address</label>
              <input
                type="text"
                className="form-control"
                name="street"
                placeholder="Enter your street"
                value={this.state.street}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                placeholder="Enter your city"
                value={this.state.city}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">State</label>
              <input
                type="text"
                className="form-control"
                name="stateUS"
                placeholder="Enter your state"
                value={this.state.stateUS}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Zip Code</label>
              <input
                type="text"
                className="form-control"
                name="zip"
                placeholder="Enter your zip code"
                value={this.state.zip}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone #</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Enter your phone number"
                value={this.state.phone}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
            <label>Notes</label>
            <textarea type="text" className="form-control" name="notes" placeholder="Enter any other requests" />
          </div>
          </form>
        </div>
      </div>
        <div className='col-md-4 offset-4 mg-md'>
        <button
          type="submit" className="btn btn-md btn-primary btn-block">
          Book Visit
        </button>
        </div>
      </div>
    );
  }
}

export default PetCalendar;
