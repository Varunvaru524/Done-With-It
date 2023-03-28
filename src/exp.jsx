import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

class Experimental extends Component {
    render() { 
        return (
            <View>
                <View style={styles.container}/>
                <MaterialCommunityIcons name='mail' size={40} color='blue'/>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'red',
        shadowColor:'black',
        shadowOffset: {width:5, height:5},
        shadowOpacity:0.3,
        shadowRadius:5,
        elevation:100,
    }
})


export default Experimental;