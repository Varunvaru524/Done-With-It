import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';
import * as secureStorage from 'expo-secure-store'


import Experimental from './exp';
import { Text } from 'react-native';


class Index extends Component {
    state={
        token:null
    }

    async componentDidMount(){
        const token = await secureStorage.getItemAsync('authToken')
        this.setState({token})
    }

    render() {
        return (
            <NavigationContainer>
                {/* {!this.state.token&&<WelcomeScreenRoute/>} */}
                {/* {this.state.token&&<Text>The</Text>} */}
                <Experimental/>
            </NavigationContainer>
        );
    }
}

export default Index;