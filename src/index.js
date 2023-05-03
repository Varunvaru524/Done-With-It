import React, { Component } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as secureStorage from 'expo-secure-store'
import rootCss from './rootCss';
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';
import TabNavigationRoute from './routes/TabNavigationRoute';


import Experimental from './exp';
import { Text } from 'react-native';


DefaultTheme.colors.primary = rootCss.primaryColor
DefaultTheme.colors.text = rootCss.primaryColor

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
            <NavigationContainer theme={DefaultTheme}>
                {!this.state.token&&<WelcomeScreenRoute onLogin={()=>this.setState({token:true})}/>}
                {this.state.token&&<TabNavigationRoute onLogout={()=>this.setState({token:false})}/>}
                {/* <Experimental/> */}
            </NavigationContainer>
        );
    }
}

export default Index;