import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './styles.css';
import PropTypes from 'prop-types';

export default class MenuBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    } 
    
    handleMenu = event => this.setState({ anchorEl: event.currentTarget });

    handleClose = () => this.setState({ anchorEl: null });

    render() {

        const { anchorEl } = this.state;
        const { currentUser } = this.props;
        const open = Boolean(anchorEl);
        
        return (<AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Hi, {currentUser.fullname}
                </Typography>
                <div className="user-icon-box">
                    <IconButton
                        aria-owns='menu-appbar'
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle className="user-icon"/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>)
    }
}

MenuBar.PropTypes = {
    currentUser: PropTypes.object.isRequired
}