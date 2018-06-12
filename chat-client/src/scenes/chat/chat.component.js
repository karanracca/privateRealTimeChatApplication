import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../../components/message/message.component';
import ChatHeader from '../../components/chat-window/chatWindow.component';
import './styles.css';

import _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Send from '@material-ui/icons/Send';
import Chip from '@material-ui/core/Chip';

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: props.selectedUser,
            message: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!_.isEqual(nextProps.selectedUser, prevState.selectedUser)) {
            return { selectedUser: nextProps.selectedUser };
        }
        return null;
    }

    updateValue = (evt) => this.setState({ message: evt.target.value })

    render() {
        const { selectedUser, message } = this.state;

        return (<div>
            <ChatHeader selectedUser={selectedUser} />
            <div className='container'>

                {selectedUser.messageList.map(msg => <div>
                    <div>
                        <Message data={msg}/>
                    </div>
                </div>)
                }

                <AppBar position="absolute"
                    classes={{ positionAbsolute: 'input-box' }}>
                    <Toolbar>
                        <input className="chat-input" value={message} onChange={(evt) => this.updateValue(evt)} name='chat-input' />
                        <Send className="send-icon" onClick={() => this.props.onSendMessage(this.state.message)} />
                    </Toolbar>
                </AppBar>
            </div>
        </div>
        );
    }
}

export default Chat;