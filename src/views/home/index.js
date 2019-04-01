import React, { Component } from 'react';
import './index.css';
import kettspets from "../../components/images/kettspets.png";

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5 rounded main-jumbo">

          <div className="col-sm-10 mx-auto">
            <img src={kettspets} alt="logo" className="center-img" />

          </div>

        </div>
      </div>
    )
  }
}

export default Home
