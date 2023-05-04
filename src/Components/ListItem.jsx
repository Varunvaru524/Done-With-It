import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler'
import ListItemDeleteAction from './ListItemDeleteAction';
import rootCss from '../rootCss';

class ListItem extends Component {
    render() {
        const { image, IconComponent, title, subTitle, onPress, onDelete, uri } = this.props

        return (
            <Swipeable renderRightActions={() => <ListItemDeleteAction onDelete={onDelete} />}>
                <TouchableHighlight underlayColor={rootCss.lightGrey} onPress={onPress}>
                    <View style={styles.mainContainer}>
                        {IconComponent}
                        {image && <Image source={image} style={styles.image} />}
                        {uri && <Image style={styles.image} source={{ uri: uri, width:'100%', height:250 }} />}
                        <View style={styles.textContainer} >
                            <Text style={styles.title} >{title}</Text>
                            {subTitle && <Text style={styles.subTitle} >{subTitle}</Text>}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        backgroundColor:rootCss.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    textContainer: {
        width: "100%",
        paddingLeft: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 7,
    },
    subTitle: {
        color: rootCss.mediumGrey,
        fontSize: 20,
    }
})

export default ListItem;