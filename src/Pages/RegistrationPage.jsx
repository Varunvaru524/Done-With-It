import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PageLayout from '../Components/PageLayout';
import logo from '../assets/logo-red.png'
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';


class RegistrationPage extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
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
            textContentType='emailAddress'
            onChangeText={(value) => this.setState({ email: value })}
            value={this.state.email}
          />
          <AppTextInput
            icon='lock'
            placeholder="Enter Passowrd"
            textContentType='password'
            secureTextEntry
            onChangeText={(value) => this.setState({ password: value })}
            value={this.state.password}
          />
          <AppTextInput
            icon='lock'
            placeholder="Confirm Passowrd"
            textContentType='password'
            secureTextEntry
            onChangeText={(value) => this.setState({ confirmPassword: value })}
            value={this.state.confirmPassword}
          />
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
  },loginContainer: {
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