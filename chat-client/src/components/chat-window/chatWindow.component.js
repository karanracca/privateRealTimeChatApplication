import React, { Component } from 'react';
import _ from 'lodash';
import Socket from '../../services/socket.service';
import Message from '../../Models/message.model'

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


import './styles.css';

export default class ChatHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: props.selectedUser
        }
    }

    render() {

        const { selectedUser } = this.state;

        return (
                <AppBar position="static">
                    <Toolbar>
                        <Avatar className="selected-user-icon" src={selectedUser.avatar} />
                        <Typography variant="title" color="inherit">
                            {selectedUser.fullname}
                        </Typography>
                    </Toolbar>
                </AppBar>
        )
    }
}