import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css';
import kettspetsnavbar from "../images/kettspets.png";


class Header extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    localStorage.removeItem('pettoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/registration" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profilePage" className="nav-link">
            User Account
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/schedule" className="nav-link">
            Schedule Visit
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded bg-blue">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">

          <li className="navbar-brand">

          </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <img src={kettspetsnavbar} alt="logo" width="200" height="46" />
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
