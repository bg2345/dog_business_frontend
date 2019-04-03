import React, { Component } from 'react'
import './index.css'

class RegistrationForm extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = async(e) => {
    e.preventDefault()

    // const newUser = {
    //   first_name: this.state.first_name,
    //   last_name: this.state.last_name,
    //   email: this.state.email,
    //   password: this.state.password,
    //   street: this.state.street,
    //   city: this.state.city,
    //   zip: this.state.zip,
    //   phone: this.state.phone,
    //   stateUS: this.state.stateUS
    // }

    let first_name = this.state.first_name;
    let last_name = this.state.last_name;
    let email = this.state.email;
    let password = this.state.password;
    let street = this.state.street;
    let city = this.state.city;
    let zip = this.state.zip;
    let phone = this.state.phone;
    let stateUS = 'MA'

    console.log(first_name, last_name, email);

    let url = 'https://kettspetts-backend.herokuapp.com/api/register';

    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "street": street,
        "city": city,
        "zip": zip,
        "phone": phone,
        "state": stateUS
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${data.success}`);
      this.props.history.push(`/login`)
    } else if (data.error) {
      alert(`${data.error}`);
    } else {
      alert('Try again, sorry.');
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  placeholder="Enter your street address"
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
              <label htmlFor="stateUS">State</label>
                                <select value={this.state.stateUS} onChange={this.onChange} className="form-control" name="stateUS">
                                <option value='MA'>MA</option>

                                </select>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
