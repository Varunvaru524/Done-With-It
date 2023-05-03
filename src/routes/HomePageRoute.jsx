import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ListingsPage from '../Pages/ListingsPage';
import ListingDetailsPage from '../Pages/ListingDetailsPage';


const Stack = createStackNavigator()

function HomePageRoute(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='listingsPage' component={ListingsPage}/>
      <Stack.Screen name='listDetailsPage' component={ListingDetailsPage}/>
    </Stack.Navigator>
  );
}


export default HomePageRoute;