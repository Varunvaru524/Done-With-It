import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import AccountPage from '../Pages/AccountPage';
import MyListingsPage from '../Pages/MyListingsPage';
import MessagesPage from '../Pages/MessagesPage';


const Stack = createStackNavigator()

function AccountPageRoute(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='accountPage' options={{headerShown:false}}>{({...rest})=><AccountPage {...rest} onLogout={props.onLogout}/>}</Stack.Screen>
      <Stack.Screen name='myListings' options={{title:'My Listings'}} component={MyListingsPage}/>
      <Stack.Screen name='messages' options={{title:'Messages'}} component={MessagesPage} />
    </Stack.Navigator>
  );
}


export default AccountPageRoute;