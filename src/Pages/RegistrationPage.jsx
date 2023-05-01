import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as secureStorage from 'expo-secure-store'
import rootCss from '../rootCss';
import { email, password } from '../utilities/regex'
import PageLayout from '../Components/PageLayout';
import logo from '../assets/logo-red.png'
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';


class RegistrationPage extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  async handleSublit() {
    this.setState({errors:{}})
    const isValidEmail = email.test(this.state.email)
    const isValidPassword = password.test(this.state.password)
    const isValidConfirmPassword = this.state.password === this.state.confirmPassword

    if (isValidEmail && isValidPassword && isValidConfirmPassword) {
      // Calling backend and storing the token in secure storage and logging in

      const token = 'Token From the backend'
      await secureStorage.setItemAsync('authToken', token)
      console.log(await secureStorage.getItemAsync('authToken'));
    }
    else {
      let updatedErrors = this.state.errors
      if (!isValidEmail) {
        updatedErrors.email = 'Email is not valid'
        this.setState({errors: updatedErrors})
      }
      if (!isValidPassword) {
        updatedErrors.password = 'Password should have 5 characters'
        this.setState({errors: updatedErrors})
      }
      if (!isValidConfirmPassword) {
        updatedErrors.confirmPassword = 'Password do not match'
        this.setState({errors: updatedErrors})
      }
    }
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
          {this.state.errors.email && <Text style={styles.errors}>{this.state.errors.email}</Text>}
          <AppTextInput
            icon='lock'
            placeholder="Enter Passowrd"
            textContentType='password'
            secureTextEntry
            onChangeText={(value) => this.setState({ password: value })}
            value={this.state.password}
          />
          {this.state.errors.password && <Text style={styles.errors}>{this.state.errors.password}</Text>}
          <AppTextInput
            icon='lock'
            placeholder="Confirm Passowrd"
            textContentType='password'
            secureTextEntry
            onChangeText={(value) => this.setState({ confirmPassword: value })}
            value={this.state.confirmPassword}
          />
          {this.state.errors.confirmPassword && <Text style={styles.errors}>{this.state.errors.confirmPassword}</Text>}
          <AppButton onPress={() => this.handleSublit()} bgColor='secondary'>Register</AppButton>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <AppButton onPress={() => this.props.navigation.navigate('loginScreen')}>Login</AppButton>
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
    fontWeight: '400',
    color: rootCss.error
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    padding: 10,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20
  }
})


export default RegistrationPage;