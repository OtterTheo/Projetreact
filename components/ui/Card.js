import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Card() {
    return (
    <View style={styles.cards}>
        <View style={styles.card}>
            <Text>a</Text>
        </View>
        <View style={styles.card}>
            <Text>a</Text>
        </View>
    </View>

    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        marginRight: 10,
        marginBottom: 10,
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5°
    }
});
