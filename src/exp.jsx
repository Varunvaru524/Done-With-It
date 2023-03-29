import React, { Component } from 'react';
import Button from './Components/Button';

class Experimental extends Component {
    render() { 
        return (<Button onPress={()=>console.log('clicked')}>Login</Button>);
    }
}


export default Experimental;