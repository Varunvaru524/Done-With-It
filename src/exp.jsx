import React, { Component, useRef } from 'react';
import { Text } from 'react-native';
import PageLayout from './Components/PageLayout';
import AccountPage from './Pages/AccountPage';
import ListingDetailsPage from './Pages/ListingDetailsPage';
import ListingsPage from './Pages/ListingsPage';
import LoginPage from './Pages/LoginPage';
import MessagesPage from './Pages/MessagesPage';
import ViewImagePage from './Pages/ViewImagePage';
import WelcomePage from './Pages/WelcomePage';

import WelcomeScreenRoute from './routes/WelcomeScreenRoute';




class Experimental extends Component {

    render() {
        return (
            <PageLayout>
                <WelcomeScreenRoute/>
                {/* <Text>Exp</Text> */}
            </PageLayout>
        );
    }
}

export default Experimental;
