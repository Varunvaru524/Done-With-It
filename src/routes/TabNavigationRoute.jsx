import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AccountPage from '../Pages/AccountPage';
import ListingsPage from '../Pages/ListingsPage';


const Tab = createBottomTabNavigator()

class TabNavigationRoute extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='home' component={ListingsPage}/>
        <Tab.Screen name='addListing' component={ListingsPage}/>
        <Tab.Screen name='account' component={AccountPage}/>
      </Tab.Navigator>
    );
  }
}


export default TabNavigationRoute;