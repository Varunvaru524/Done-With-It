import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageLayout from '../Components/PageLayout';
import ListItem from '../Components/ListItem';
import ListItemSeparetor from '../Components/ListItemSeparetor';
import Icon from '../Components/Icon';
import rootCss from '../rootCss';
import image from '../assets/jacket.jpg'

class AccountPage extends Component {
    render() { 
        return (
            <PageLayout>
                <ListItem title='Varun' subTitle='Varunvaru524@gmail.com' image={image}  />
                <View style={styles.listContainer}>
                    <ListItem IconComponent={<Icon iconName='format-list-bulleted' bgColor={rootCss.primaryColor} iconColor={rootCss.white} />} title='My Listings' />
                    <ListItemSeparetor/>
                    <ListItem IconComponent={<Icon iconName='email' bgColor={rootCss.secondaryColor} iconColor={rootCss.white} />} title='My Listings' />
                </View>
                    <ListItem IconComponent={<Icon iconName='logout' bgColor='rgb(198, 212, 70)' iconColor={rootCss.white} />} title='My Listings' />
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