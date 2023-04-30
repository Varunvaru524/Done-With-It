import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import logo from '../assets/logo-red.png'
import PageLayout from '../Components/PageLayout';
import AppButton from '../Components/AppButton';

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }


    handleSublit() {
        console.log(this.state);
    }

    render() {
        return (
            <PageLayout>
                <Image source={logo} style={styles.image} />
                <View style={styles.inputContainer}>
                    <AppTextInput
                        icon='email'
                        placeholder="Enter Email"
                        autoCapitalize='none'
                        testContentType='emailAddress'
                        onChangeText={(value) => this.setState({ email: value })}
                    />
                    <AppTextInput
                        icon='lock'
                        placeholder="Enter Passowrd"
                        testContentType='password'
                        secureTextEntry
                        onChangeText={(value) => this.setState({ password: value })}
                    />
                    <AppButton onPress={() => this.handleSublit()} >Login</AppButton>
                </View>
            </PageLayout>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 50,
        alignSelf: 'center'
    },
    inputContainer:{
        padding:10
    }
})

export default LoginPage;