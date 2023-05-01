import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import * as secureStorage from 'expo-secure-store'
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';
import TabNavigationRoute from './routes/TabNavigationRoute';


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
                {!this.state.token&&<WelcomeScreenRoute onLogin={()=>this.setState({token:true})}/>}
                {this.state.token&&<TabNavigationRoute onLogout={()=>this.setState({token:false})}/>}
                {/* <Experimental/> */}
            </NavigationContainer>
        );
    }
}

export default Index;