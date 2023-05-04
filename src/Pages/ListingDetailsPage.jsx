import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ListItem from '../Components/ListItem';
import rootCss from '../rootCss';
import img from '../assets/profilePic.png'
import { data } from '../utilities/data';

class ListingDetailsPage extends Component {
    render() {
        const { title, subTitle, image, description, uri } = this.props.route.params

        return (
            <ScrollView >
                <View style={styles.mainContainer}>
                    {image && <Image style={styles.image} source={image} />}
                    {uri && <Image style={styles.image} source={{ uri: uri[0], width: '100%', height: 250 }} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title} >{title}</Text>
                        <Text style={styles.subTitle} >{'Rs ' + subTitle}</Text>
                        <Text style={styles.description}>Description</Text>
                        <Text>{'      ' + description}</Text>
                    </View>
                    <ListItem image={img} title='Varun' subTitle={`${data().length} Listings`} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {},
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 500
    },
    subTitle: {
        fontSize: 20,
        color: rootCss.secondaryColor,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 18,
        fontWeight: '500'
    }
})

export default ListingDetailsPage;