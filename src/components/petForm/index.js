import React, { Component } from 'react';
import './index.css';

class PetForm extends Component {
  constructor() {
    super()
    this.state = {
      pet_name: '',
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

    let pet_name = this.state.pet_name

    console.log(pet_name);

    let url = 'http://localhost:5000/api/save_pet';

    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "pet_name": pet_name,
        "user_id": this.props.user['user_id']
      }
    });

    let data = await response.json();

    localStorage.setItem('pettoken', JSON.stringify(data));

    localStorage.getItem('pettoken', JSON.stringify(data));

    if (data.success) {
      alert(`${data.success}`);
      window.location.reload();
    } else if (data.error) {
      alert(`${data.error}`);
    } else {
      alert('Try again, sorry.');
    }

  }


  render() {
    return (
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <h3 className="h3 mb-3 font-weight-normal">Add your pet:</h3>
            <div className="form-group">
              <label htmlFor="name">Pet name</label>
              <input
                type="text"
                className="form-control"
                name="pet_name"
                placeholder="Enter your pet's name"
                value={this.state.pet_name}
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-primary btn-block"
            >
              Add Pet
            </button>
          </form>
          </div>
        </div>
    );
  }
}

export default PetForm;
