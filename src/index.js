import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';


import Experimental from './exp';

class Index extends Component {
    render() {
        return (
            <NavigationContainer>
                <WelcomeScreenRoute/>
                {/* <Experimental/> */}
            </NavigationContainer>
        );
    }
}

export default Index;