import React, { Component } from 'react';
import './login.css';
import { login } from '../../services/user.service';
import { Link } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: false,
      passwordError: false,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  login = () => {
    if (this.state.username === '') {
      this.setState({ usernameError: true })
      return;
    }

    if (this.state.password === '') {
      this.setState({ passwordError: true })
      return;
    }

    login(this.state).then(result => {
      this.props.notify.openSnackbar(`Welcome ${result.nickname}`);
      this.props.history.push('/welcome');
    }).catch(err => {
      this.props.notify.openSnackbar(err.message);
    })
  }

  render() {

    const { username, password, usernameError, passwordError} = this.state;

    return (<div>
      <Card className='main-container'>
        <div className='main-heading'>Login</div>
        <CardContent>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth
              required
              error={usernameError}
              id="username"
              label="Username"
              value={username}
              onChange={this.handleChange('username')}
            />
            <TextField
              fullWidth
              required
              error={passwordError}
              id="password"
              label="Passsword"
              value={password}
              onChange={this.handleChange('password')}
            />
          </form>
        </CardContent>
        <div className='btn-row'>
          <Button variant="raised" color="primary" size="small" onClick={this.login}>Login</Button>
        </div>

        <div>
          New user? <Link to="/register">Sign Up here</Link>
        </div>
      </Card>
    </div>
   );
  }
}

export default Login;