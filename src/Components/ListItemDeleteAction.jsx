import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import rootCss from '../rootCss';

class ListItemDeleteAction extends Component {
    render() {
        const {onDelete} = this.props
        return (
            <TouchableWithoutFeedback onPress={onDelete}>
                <View style={styles.container}>
                    <MaterialCommunityIcons size={50} name='trash-can' color={rootCss.white} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:rootCss.primaryColor,
        width:70,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }
})

export default ListItemDeleteAction;