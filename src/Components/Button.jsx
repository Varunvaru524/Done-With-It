import React, { Component } from 'react';
import { View , TouchableOpacity, Text, StyleSheet} from 'react-native'
import rootCss from '../rootCss'

class Button extends Component {
    render() { 
        const {children, onPress} = this.props
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text>{children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: rootCss.primaryColor,
        height:40,
        width:"100%",
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    }
})


export default Button;