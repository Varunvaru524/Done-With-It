import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback,Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as imagePicker from 'expo-image-picker'
import rootCss from '../rootCss';
import PageLayout from '../Components/PageLayout';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import {addData} from '../utilities/data'


class NewPostPage extends Component {
  state = {
    permission: null,
    uri: [],
    title:'',
    subTitle:'',
    description:'',
    errors:null
  }

  async handleImages() {
    const permission = await imagePicker.getMediaLibraryPermissionsAsync().catch(reject => console.log('Get permission', reject))
    this.setState({ permission: permission.granted })

    const selectImages = async () => {
      const images = await imagePicker.launchImageLibraryAsync().catch(reject => console.log(reject))
      const updatedUri = this.state.uri
      updatedUri.unshift(images.assets[0].uri)
      this.setState({ uri: updatedUri })
    }

    if (this.state.permission) {
      selectImages()
    }
    else {
      const permission = await imagePicker.requestMediaLibraryPermissionsAsync().catch(reject => console.log('Request permission', reject))
      this.setState({ permission: permission.granted })
      selectImages()
    }
  }

  handleSubmit(){
    addData(this.state)
      this.props.navigation.navigate('listingsPage')
  }

  render() {
    return (
      <PageLayout>
        <View style={styles.container}>
          <Text style={styles.title}>New Post</Text>
          <View style={styles.imagesContainer}>
            <ScrollView horizontal>
              <TouchableWithoutFeedback onPress={() => this.handleImages()}>
                <View style={styles.eachImage}>
                  <MaterialCommunityIcons name='camera' size={40} color={rootCss.mediumGrey} />
                </View>
              </TouchableWithoutFeedback>
              {this.state.uri.map(item => (
                <View style={styles.eachImage} key={item}>
                  <Image source={{ uri: item, width: 100, height: 100 }} />
                </View>
              ))}
            </ScrollView>
          </View>
          <AppTextInput icon='lead-pencil' placeholder='Title' onChangeText={(value)=>this.setState({title:value})} value={this.state.title} />
          <AppTextInput icon='currency-rupee' placeholder='Price' keyboardType='numeric' onChangeText={(value)=>this.setState({subTitle:value})} value={this.state.subTitle} />
          <AppTextInput icon='newspaper-variant-outline' placeholder='Description' multiline={true} onChangeText={(value)=>this.setState({description:value})} value={this.state.description} />
          <AppButton onPress={()=>this.handleSubmit()}>Post</AppButton>
          <Text onPress={()=>this.props.navigation.navigate('listingsPage')} style={styles.cancel}>Cancel</Text>
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
    marginBottom:10
  },
  eachImage: {
    backgroundColor: rootCss.white,
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden'
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10
  },
  cancel: {
    fontSize: 18,
    textAlign: 'center',
  }
})


export default NewPostPage;