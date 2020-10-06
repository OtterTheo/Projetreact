import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header({titleText}) {
    return (
        <View style={styles.block}>
         <View><Text style={styles.menu}>=</Text></View>
         <View><Text style={styles.text}>{titleText}</Text></View>
         <View></View>
        </View>
    );
}


const styles = StyleSheet.create({
    block: {

        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: 'red',
        height: '20%',
        width: '100%',
        justifyContent: 'space-between',

    },
    menu: {
        fontSize: 50,
    },
});
