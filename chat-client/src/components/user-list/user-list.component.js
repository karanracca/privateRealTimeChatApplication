import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.users !== prevState.users) {
            return {users: nextProps.users};
        }
        return null;
    }

    style = {
        primary: {
            fontSize: '2rem'
        }
    }

    render() {

        const { users } = this.state;
        if (users.length > 0) {
            return (
                <Card className="user-list-card">
                    <CardContent>
                        <List>
                            {users.map( (user, index) => 
                                <ListItem onClick={() => this.props.onUserSelected(index)}>
                                    <Avatar className="user-list-icon" src={user.avatar} />
                                    <ListItemText
                                        primary={<span>{user.fullname}</span>}
                                        secondary={user.nickname} />
                                    { user.showBadge? <FiberManualRecord /> : null}
                                </ListItem>
                                ) 
                            }
                        </List>
                    </CardContent>
                </Card>
            );
        } else {
            return (
                <Card className="user-list-card">
                    <CardContent className="text-center">
                    <h5>Sorry, No users are currently online.</h5>
                    </CardContent>
                </Card>
            )
        }
        
    }
}

UserList.propTypes = {
    users: PropTypes.array
}

export default UserList;