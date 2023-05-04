import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import rootCss from '../rootCss';
import PageLayout from '../Components/PageLayout';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';


class NewPostPage extends Component {
  render() {
    return (
      <PageLayout>
        <View style={styles.container}>
          <Text style={styles.title}>New Post</Text>
          <View style={styles.imagesContainer}>
            <View style={styles.eachImage}>
              <MaterialCommunityIcons name='camera' size={40} color={rootCss.mediumGrey} />
            </View>
          </View>
          <AppTextInput icon='lead-pencil' placeholder='Title' />
          <AppTextInput icon='currency-rupee' placeholder='Price' />
          <AppTextInput icon='newspaper-variant-outline' placeholder='Description' />
          <AppButton>Post</AppButton>
          <Text style={styles.cancel}>Cancel</Text>
        </View>
      </PageLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  imagesContainer: {

  },
  eachImage: {
    backgroundColor: rootCss.white,
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  cancel: {
    fontSize: 18,
    textAlign: 'center',
  }
})


export default NewPostPage;