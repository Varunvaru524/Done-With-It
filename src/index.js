import React, { Component } from 'react';
import Experimental from './exp';
import { NavigationContainer } from '@react-navigation/native'


class Index extends Component {
    render() {
        return (
            <NavigationContainer>
                <Experimental />
            </NavigationContainer>
        );
    }
}

export default Index;