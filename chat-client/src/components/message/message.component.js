import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import './style.css';


export default function Message (props) {

    const {data} = props;
    return (<div className="message-container" style={data.from? null : {justifyContent: 'flex-end'}}>
        <Chip label={data.content} />
    </div>);
}


