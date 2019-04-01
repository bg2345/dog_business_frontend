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
      user_info: {},
      pet_info: {},
      time: {}
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

  onSubmit = async(e) => {
    e.preventDefault()

    let date_sel = this.state.startDate
    console.log(date_sel)
    console.log(date_sel.getDate())
    let month = date_sel.getMonth()
    let day = date_sel.getDate()
    let year = date_sel.getFullYear()
    let hours = date_sel.getHours()
    let minutes = date_sel.getMinutes()

  }

  componentDidMount() {
    const user_info = JSON.parse( localStorage.getItem( "usertoken" ) );
    this.setState( { user_info } );
    console.log(user_info)

    const pet_info = JSON.parse( localStorage.getItem( "pettoken" ) );
    this.setState( { pet_info } );
    console.log(pet_info)


}



  render() {
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-md-4 wide mx-auto'>
        <h3>Select day and time:</h3>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
          withPortal
        />
        <h6>Please book at least 2 days in advance and between the times of 8:00 AM and 9:00PM. If there is an issue with your booking, we will contact you.</h6>
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
                value={this.state.pet_info && this.state.pet_info['pet_name']}
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
            <label htmlFor="selection">Duration (in minutes):</label>
                              <select className="form-control" id="service">
                              <option>30</option>
                              <option>60</option>
                              <option>Please call or email to book a visit longer than 1 hour</option>
                              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Street Address</label>
              <input
                type="text"
                className="form-control"
                name="street"
                placeholder="Enter your street"
                value={this.state.user_info['street']}
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
                value={this.state.user_info['city']}
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
                value={this.state.user_info['state']}
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
                value={this.state.user_info['zip']}
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
                value={this.state.user_info['phone']}
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
                value={this.state.user_info['zip']}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Notes</label>
              <textarea type="text" className="form-control" name="notes" placeholder="Enter any other requests" />
            </div>


        <button
          type="submit" className="btn btn-md btn-primary btn-block">
          Book Visit
        </button>

        </form>
        </div>
      </div>
    </div>
    );
  }
}

export default PetCalendar;
