import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Icon extends Component {
    render() {
        const { size, iconName, iconColor } = this.props

        return (
            <View style={this.styles.container} >
                <MaterialCommunityIcons name={iconName} size={size/1.7} color={iconColor} />
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            width: this.props.size,
            height: this.props.size,
            borderRadius: this.props.size/2,
            backgroundColor: this.props.bgColor,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}

Icon.defaultProps = {
    size:50,
    iconColor:'green',
    bgColor:'red',
    iconName:'mail'
}

export default Icon;