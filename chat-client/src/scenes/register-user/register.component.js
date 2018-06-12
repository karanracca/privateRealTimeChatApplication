import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './register-user.css';
import {register} from '../../services/user.service';
import { Link } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Face from '@material-ui/icons/Face';
import Snackbar from '@material-ui/core/Snackbar';
import default_icon from '../../assets/default_icon.svg'


class RegisterUser extends Component {

  state = {
    fullname: '',
    nickname: '',
    email: '',
    password: '',
    avatar: default_icon,
    snackbar: false,
    snackMessage: ""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  register = () => {
    if (this.state.fullname === "" || this.state.nickname === "" || this.state.email === "" || this.state.password === "") {
      this.setState({snackbar:true, snackMessage: "Please enter all the required fields"});
      return;
    }
    
    register(this.state).then( result => {
      this.props.history.push('/login')
    }).catch(err => {
      this.setState({snackbar:true, snackMessage: err.message})
    })
  }

  onAvatarChange = (files) => {
    console.log(files);
    var reader = new FileReader();
    reader.onloadend = function() {
      this.setState({avatar: reader.result})
    }.bind(this);
    reader.readAsDataURL(files[0]); 
  }
  
  render() {

    const {fullname, nickname, email, password, avatar, snackbar, snackMessage} = this.state;

    return (<div>
      <Snackbar
          open={this.state.snackbar}
          autoHideDuration={3000}
          message={<span>{snackMessage}</span>}
      />
      
      <Card className='main_container'> 
        <h2>Register</h2>
        
        <Avatar
          src={avatar}
          alt="Your Avatar"
          className='avatar'
        />
        <div className="upload-btn-wrapper">
          <button className="btn">Upload Your Avatar</button>
          <input type="file" name="avatar" accept="image/*" onInput={(e) => this.onAvatarChange(e.target.files)}/>
        </div>
        <CardContent>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            id="fullname"
            label="fullname"
            value={fullname}
            onChange={this.handleChange('fullname')}
          />

          <TextField
            fullWidth
            required
            id="nickname"
            label="nickname"
            value={nickname}
            onChange={this.handleChange('nickname')}
          />

          <TextField
            fullWidth
            required
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
          />

          <TextField
            fullWidth
            required
            id="password"
            label="password"
            value={password}
            onChange={this.handleChange('password')}
          />
        </form>
        </CardContent>
        <div>
          <Button variant="raised" color="primary" size="small" onClick={this.register}>Sign Up</Button>
        </div>
        <div>
            <Link to="/login">Back</Link>
        </div>
      </Card>
    </div>);
  }
}

export default RegisterUser;