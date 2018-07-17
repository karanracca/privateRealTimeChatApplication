import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const SnackbarContext = React.createContext();

export class SnackbarProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            message: ""
        }
    }

    openSnackbar = message => {
        this.setState({
            message,
            show: true,
        });
    };

    closeSnackbar = () => {
        this.setState({
            message: '',
            show: false,
        });
    };

    render() {
        return <SnackbarContext.Provider value={{
            openSnackbar: this.openSnackbar,
            closeSnackbar: this.closeSnackbar
          }}>
            <Snackbar
                open={this.state.show}
                autoHideDuration={3000}
                onClose={this.closeSnackbar}
                message={this.state.message}
            />

            {this.props.children}

        </SnackbarContext.Provider>
    }
}

export const SnackbarConsumer = SnackbarContext.Consumer;





