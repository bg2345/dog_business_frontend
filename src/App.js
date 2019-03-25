import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import Login from './views/login';
import Home from './views/home';
import RegistrationForm from './views/registration';
import ProfilePage from './views/profilePage';
import Header from './components/header';
import config from './app.config';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path="/" exact component={Home} />
          <Route
            path="/login"
            render={() => <Login baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/registration" component={RegistrationForm} />
          <SecureRoute path="/profilePage" component={ProfilePage} />
        </main>
      </div>
    );
  }
}
