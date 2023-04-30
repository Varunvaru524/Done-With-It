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
        <Stack.Screen name='registerScreen' component={RegistrationPage} />
        <Stack.Screen name='loginScreen' component={LoginPage} />
      </Stack.Navigator>
    );
  }
}


export default WelcomeScreenRoute;