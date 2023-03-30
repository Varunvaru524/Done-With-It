import React, { Component } from 'react';
import Img from './assets/jacket.jpg'
import PageLayout from './Components/PageLayout';
import ListItem from './Components/ListItem';
import Icon from './Components/Icon';

class Experimental extends Component {
    render() { 
        return (
            <PageLayout>
                <ListItem  title='hey'   />
            </PageLayout>
        );
    }
}


export default Experimental;