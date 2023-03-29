import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import rootCss from '../rootCss';

class ListingDetailsPage extends Component {
    render() {
        const { image, title, subTitle } = this.props

        return (
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={image} />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.subTitle} >{subTitle}</Text>
                </View>
            </View>
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
        marginVertical: 10
    }
})

export default ListingDetailsPage;