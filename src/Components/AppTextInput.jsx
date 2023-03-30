import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import rootCss from '../rootCss';

class AppTextInput extends Component {
    render() {
        const { icon, placeholder } = this.props
        return (
            <View style={styles.container} >
                <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={rootCss.mediumGrey} />
                <TextInput style={styles.textInput} placeholder={placeholder} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: rootCss.white,
        borderRadius: 25,
        flexDirection: 'row',
        marginVertical:10,
        padding:15
    },
    icon:{
        margin:10
    },
    textInput: {
        fontSize: 18,
        color: rootCss.darkGrey,
        width:'100%',
    }
})


export default AppTextInput;