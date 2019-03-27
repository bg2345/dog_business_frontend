import React, { Component } from 'react'
import Appointments from '../../components/userAppts'
import PetForm from '../../components/petForm'
import './index.css'

class ProfilePage extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      pet_name: '',
      street: '',
      city: '',
      zip: '',
      email: '',
      errors: {}
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Your Profile</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Pet Name</td>
                <td>{this.state.pet_name}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{this.state.street}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.city}</td>
              </tr>
              <tr>
                <td>Zip</td>
                <td>{this.state.zip}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PetForm />
        <Appointments />
      </div>
    )
  }
}

export default ProfilePage
