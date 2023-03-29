import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import rootCss from '../rootCss';

class ListItem extends Component {
    render() {
        const { image, title, subTitle, onPress } = this.props

        return (
            <TouchableHighlight underlayColor={rootCss.lightGrey} onPress={onPress}>
                <View style={styles.mainContainer}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.textContainer} >
                        <Text style={styles.title} >{title}</Text>
                        <Text style={styles.subTitle} >{subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    textContainer: {
        width: "100%",
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subTitle: {
        color: rootCss.mediumGrey,
        fontSize: 20,
    }
})

export default ListItem;