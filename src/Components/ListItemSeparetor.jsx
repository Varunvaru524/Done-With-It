import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import rootCss from '../rootCss';


class ListItemSeparetor extends Component {
    render() { 
        return (
            <View style={styles.separetor} />
        );
    }
}
 
const styles = StyleSheet.create({
    separetor:{
        backgroundColor: rootCss.lightGrey,
        width:'100%',
        height:1,
    }
})

export default ListItemSeparetor;