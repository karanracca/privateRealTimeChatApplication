import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import { login } from '../../services/user.service';
import { Link } from 'react-router-dom'


import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Snackbar from '@material-ui/core/Snackbar';


class Login extends Component {

  state = {
    username: '',
    password: '',
    usernameError: false,
    passwordError: false,
    snackbar: false,
    snackMessage: ''
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
      this.props.history.push('/welcome')
    }).catch(err => {
      this.setState({ snackbar: true, snackMessage: err.message })
    })
  }

  render() {

    const { username, password, usernameError, passwordError, snackbar, snackMessage } = this.state;

    return (<div>
      <Snackbar
        open={this.state.snackbar}
        autoHideDuration={3000}
        message={<span>{snackMessage}</span>}
      />
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
    </div>);
  }
}

export default Login;