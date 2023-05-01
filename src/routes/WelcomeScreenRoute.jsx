import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import WelcomePage from '../Pages/WelcomePage';
import LoginPage from '../Pages/LoginPage';
import RegistrationPage from '../Pages/RegistrationPage';

const Stack = createStackNavigator()

class WelcomeScreenRoute extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='welcomeScreen' component={WelcomePage} />
        <Stack.Screen name='registerScreen'>{()=><RegistrationPage onLogin={this.props.onLogin}/>}</Stack.Screen>
        <Stack.Screen name='loginScreen' >{()=><LoginPage onLogin={this.props.onLogin}/>}</Stack.Screen>
      </Stack.Navigator>
    );
  }
}


export default WelcomeScreenRoute;