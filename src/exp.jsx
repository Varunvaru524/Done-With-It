import React, { Component } from 'react';
import Img from './assets/jacket.jpg'
import ListingDetailsPage from './Pages/ListingDetailsPage';

class Experimental extends Component {
    render() { 
        return (<ListingDetailsPage image={Img} title='Red Jacket' subTitle='$100' />);
    }
}


export default Experimental;