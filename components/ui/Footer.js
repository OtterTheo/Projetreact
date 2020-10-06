import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Footer({titleText}) {
    return (
        <View style={styles.footer}>
            <View><Text style={styles.text}>{titleText}</Text></View>
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: 'red',
        height: '10%',
        width: '100%',
        position: 'fixed',
        bottom: 0,

    },

});
