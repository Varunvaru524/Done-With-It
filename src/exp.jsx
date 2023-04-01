import React, { Component } from 'react';
import LoginPage from './Pages/LoginPage';

class Experimental extends Component {
    state = {
        valueChange: false
    }
    render() {
        return (
            <LoginPage/>
        );
    }
}

export default Experimental;