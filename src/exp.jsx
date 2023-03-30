import React, { Component } from 'react';
import { Text } from 'react-native';
import PageLayout from './Components/PageLayout';
import AppTextInput from './Components/AppTextInput';

class Experimental extends Component {
    render() {
        return (
            <PageLayout>
                <AppTextInput icon='email' placeholder='User Name' />
            </PageLayout>
        );
    }
}

export default Experimental;