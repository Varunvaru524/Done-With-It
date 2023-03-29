import React, { Component } from 'react';
import ListingDetailsScreen from './Pages/ListingDetailsPage';
import Img from './assets/jacket.jpg'

class Experimental extends Component {
    render() { 
        return (<ListingDetailsScreen image={Img} title='Red Jacket' subTitle='$100' />);
    }
}


export default Experimental;