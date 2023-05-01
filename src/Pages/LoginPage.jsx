import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as secureStorage from 'expo-secure-store'
import rootCss from '../rootCss';
import { email, password } from '../utilities/regex'
import AppTextInput from '../Components/AppTextInput';
import logo from '../assets/logo-red.png'
import PageLayout from '../Components/PageLayout';
import AppButton from '../Components/AppButton';

class LoginPage extends Component {

    state = {
        email: '',
        password: '',
        errors: ''
    }

    async handleSublit() {
        const isValidEmail = email.test(this.state.email)
        const isValidPassword = password.test(this.state.password)
        
        if (isValidEmail && isValidPassword) {
            // Calling backend and storing the token in secure storage and logging in

            const token = 'Token From the backend'
            await secureStorage.setItemAsync('authToken',token)
            console.log( await secureStorage.getItemAsync('authToken'));
        }
        else this.setState({ errors: 'Email or Password is incorrect' })
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
                        textContentType='emailAddress'
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    />
                    <AppTextInput
                        icon='lock'
                        placeholder="Enter Password"
                        textContentType='password'
                        secureTextEntry
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    />
                    {this.state.errors && <Text style={styles.errors}>{this.state.errors}</Text>}
                    <AppButton onPress={() => this.handleSublit()} >Login</AppButton>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Don't have an account?</Text>
                    <AppButton onPress={() => this.props.navigation.navigate('registerScreen')} bgColor='secondary'>Register</AppButton>
                </View>
            </PageLayout>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginTop: 60,
        marginBottom: 50,
        alignSelf: 'center'
    },
    inputContainer: {
        padding: 10
    },
    errors: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'400',
        color: rootCss.error
    },
    registerText: {
        textAlign: 'center',
        fontSize: 20
    },
    registerContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 20,
        padding: 10,
    }
})

export default LoginPage;