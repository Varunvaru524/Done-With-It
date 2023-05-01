import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AccountPage from '../Pages/AccountPage';
import ListingsPage from '../Pages/ListingsPage';
import NewPostPage from '../Pages/NewPostPage';


const Tab = createBottomTabNavigator()

class TabNavigationRoute extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown:false,}}>
        <Tab.Screen
        name='home'
        component={ListingsPage}
        options={()=>({
          title:'Home',
          tabBarIcon:({color, size})=><MaterialCommunityIcons name='home' color={color} size={size}/>
        })}
        />
        <Tab.Screen
        name='addNewListing'
        component={NewPostPage}
        options={()=>({
          title:'New Post',
          tabBarIcon:({color, size})=><MaterialCommunityIcons name='plus' color={color} size={size}/>
        })}
        />
        <Tab.Screen
        name='account'
        options={()=>({
          title:'Account',
          tabBarIcon:({color, size})=><MaterialCommunityIcons name='account' color={color} size={size}/>
        })}
        >{()=><AccountPage onLogout={this.props.onLogout}/>}</Tab.Screen>
      </Tab.Navigator>
    );
  }
}


export default TabNavigationRoute;