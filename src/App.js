import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './views/login';
import Home from './views/home';
import RegistrationForm from './views/registration';
import ProfilePage from './views/profilePage';
import Header from './components/header';
import Schedule from './views/schedule';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

            <Route exact path="/" component={Home} />
            <div className="container">
            <Route exact path="/registration" component={RegistrationForm} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profilePage" component={ProfilePage} />
            <Route exact path="/schedule" component={Schedule} />
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
