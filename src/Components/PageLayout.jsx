import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import rootCss from '../rootCss';

class PageLayout extends Component {
    render() {
        const {style, ...rest} =   this.props

        return (
            <SafeAreaView>
                <View style={[styles.container, style]} {...rest} >{this.props.children}</View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS === 'android') && StatusBar.currentHeight,
        backgroundColor: rootCss.lightGrey,
        height: '100%'
    }
})

export default PageLayout;