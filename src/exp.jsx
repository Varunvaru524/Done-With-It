import React, { Component } from 'react';
import Card from './Components/Card';
import img from './assets/jacket.jpg'

class Experimental extends Component {
    render() { 
        return (<Card title='Red Jacket For sale' subTitle='$100' image={img}/>);
    }
}


export default Experimental;