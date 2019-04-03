import React, { Component } from 'react'
import Appointments from '../../components/userAppts'
import PetForm from '../../components/petForm'
import './index.css'
import Checkout from '../../components/checkout'

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
      errors: {},
      user_info: {},
      pet_info:{}
    }
  }


  componentDidMount() {
    const user_info = JSON.parse( localStorage.getItem( "usertoken" ) );
    this.setState( { user_info } );
    console.log(user_info);

    const pet_info = JSON.parse( localStorage.getItem( "pettoken" ) );
    this.setState( { pet_info } );
    console.log(pet_info)
}

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center">Account Information</h2>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.user_info['first_name']}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.user_info['last_name']}</td>
              </tr>
              <tr>
                <td>Pet Name</td>
                <td>{this.state.pet_info && this.state.pet_info['pet_name']}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{this.state.user_info['street']}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.user_info['city']}</td>
              </tr>
              <tr>
                <td>Zip</td>
                <td>{this.state.user_info['zip']}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.user_info['email']}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PetForm user={this.state.user_info} />
        <Appointments />
        <Checkout />
      </div>
    )
  }
}

export default ProfilePage
