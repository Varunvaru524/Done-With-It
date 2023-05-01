import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import rootCss from '../rootCss';
import * as secureStorage from 'expo-secure-store'
import * as updates from 'expo-updates'
import PageLayout from '../Components/PageLayout';
import ListItem from '../Components/ListItem';
import ListItemSeparetor from '../Components/ListItemSeparetor';
import Icon from '../Components/Icon';
import image from '../assets/jacket.jpg'

class AccountPage extends Component {
    handleMyListings(){
        console.log('My Listings');
    }

    handleMessages(){
        console.log('Messages');
    }
    
    async handleLogout(){
        await secureStorage.deleteItemAsync('authToken')
        await updates.reloadAsync()
        console.log('logout');
    }

    render() { 
        return (
            <PageLayout>
                <ListItem title='Varun' subTitle='Varunvaru524@gmail.com' image={image}  />
                <View style={styles.listContainer}>
                    <ListItem IconComponent={<Icon iconName='format-list-bulleted' bgColor={rootCss.primaryColor} iconColor={rootCss.white} />} title='My Listings' onPress={()=>this.handleMyListings()} />
                    <ListItemSeparetor/>
                    <ListItem IconComponent={<Icon iconName='email' bgColor={rootCss.secondaryColor} iconColor={rootCss.white} />} title='Messages' onPress={()=>this.handleMessages()} />
                </View>
                    <ListItem IconComponent={<Icon iconName='logout' bgColor='rgb(198, 212, 70)' iconColor={rootCss.white} />} title='Logout' onPress={()=>this.handleLogout()} />
            </PageLayout>
        );
    }
}
 
const styles = StyleSheet.create({
    listContainer:{
        marginVertical:20
    }
})


export default AccountPage;