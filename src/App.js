import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import Login from './views/login'
import Home from './views/home'

class App extends Component {
  render() {
    return (
      <Router>
       <Security
         issuer={'https://dev-448350.okta.com'}
         client_id={'0oadgwwt7VnVuMkba356'}
         redirect_uri={'http://localhost:3000/implicit/callback'}
         scope={['openid', 'profile', 'email']}>

         <Switch>
           <Route exact path="/" component={Login} />
           <Route path="/implicit/callback" component={ImplicitCallback} />
           <SecureRoute path="/home" component={Home} />
         </Switch>
       </Security>
     </Router>
    );
  }
}

export default App;
