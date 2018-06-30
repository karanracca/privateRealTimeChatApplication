import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './scenes/login/login.component';
import RegisterUser from './scenes/register-user/register.component'
import Welcome from './scenes/welcome/welcome.component';
import { SnackbarProvider, SnackbarConsumer } from './util/NotificationContext';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <SnackbarProvider>
            <SnackbarConsumer>
              {(notify) => (<div>
                <Route exact path='/' render={(props) => <Login {...props} notify={notify} />} />
                <Route path='/login' render={(props) => <Login {...props} notify={notify} />} />
                <Route path='/register' component={RegisterUser} />
                <Route path='/welcome' component={Welcome} />
              </div>
              )}
            </SnackbarConsumer>
          </SnackbarProvider>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
