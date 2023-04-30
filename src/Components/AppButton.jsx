import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import rootCss from '../rootCss'

class AppButton extends Component {
    render() {
        const { children, onPress, bgColor } = this.props
        return (
            <TouchableOpacity activeOpacity={0.8} style={[styles.buttonContainer, { backgroundColor: (bgColor == "secondary") ? rootCss.secondaryColor : rootCss.primaryColor }]} onPress={onPress}>
                <Text style={styles.text}>{children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 40,
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginVertical: 10,
    },
    text: {
        color: rootCss.white,
        fontSize: 20,
        fontWeight: "500"

    }
})


export default AppButton;