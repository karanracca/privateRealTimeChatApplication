import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './scenes/login/login.component';
import RegisterUser from './scenes/register-user/register.component'
import Welcome from './scenes/welcome/welcome.component'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={RegisterUser} />
          <Route path='/welcome' component={Welcome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
