import React, { Component, useRef } from 'react';
import { Text, View } from 'react-native';
import Lottieview from 'lottie-react-native'
import PageLayout from './Components/PageLayout';
import AccountPage from './Pages/AccountPage';
import ListingDetailsPage from './Pages/ListingDetailsPage';
import ListingsPage from './Pages/ListingsPage';
import LoginPage from './Pages/LoginPage';
import MessagesPage from './Pages/MessagesPage';
import ViewImagePage from './Pages/ViewImagePage';
import WelcomePage from './Pages/WelcomePage';
import WelcomeScreenRoute from './routes/WelcomeScreenRoute';
import TabNavigationRoute from './routes/TabNavigationRoute';




class Experimental extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <Text>hello</Text>
            </View>
        );
    }
}

export default Experimental;
