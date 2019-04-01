import React, { Component } from 'react';
import './index.css';
import kettspets from "../../components/images/kettspets.png";
import CarouselHome from "../../components/carouselHome";

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5 rounded main-jumbo">

          <div className="col-sm-10 mx-auto">
            <img src={kettspets} alt="logo" className="center-img" />

          </div>

        </div>
        <CarouselHome />
        <h6 className="cent">Our clients include dogs, cats, horses, and many other furry creatures. We can take your dog for a walk, provide grooming services, or check in and feed your pet while you are away. Let us know what we can do for you and your special friend!</h6>

      </div>
    )
  }
}

export default Home
