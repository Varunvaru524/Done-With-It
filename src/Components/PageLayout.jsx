import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar, SafeAreaView } from 'react-native';
import rootCss from '../rootCss';

class PageLayout extends Component {
    render() {
        const { style, ...rest } = this.props

        return (
            <SafeAreaView style={{ backgroundColor: rootCss.lightGrey }}>
                <View style={[styles.container, style]} {...rest} >{this.props.children}</View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0,
        backgroundColor: rootCss.lightGrey,
        height: '100%'
    }
})

export default PageLayout;