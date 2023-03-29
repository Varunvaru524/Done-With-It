import React, { Component } from 'react';
import { View , TouchableOpacity, Text, StyleSheet} from 'react-native'
import rootCss from '../rootCss'

class AppButton extends Component {
    render() { 
        const {children, onPress, bgColor} = this.props
        return (
            <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:(bgColor=="secondary")?rootCss.secondaryColor:rootCss.primaryColor}]} onPress={onPress}>
                <Text>{children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        // backgroundColor: rootCss.primaryColor,
        height:40,
        width:"100%",
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginVertical:10
    }
})


export default AppButton;