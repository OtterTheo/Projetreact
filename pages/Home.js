
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header  from '../components/ui/Header' ;
import Footer  from '../components/ui/Footer' ;
import Card  from '../components/ui/Card' ;



export default function App() {
    return (
        <View style={styles.container}>
            <Header titleText='HOME' />
                <View><Card></Card></View>
                <View><Card></Card></View>

            <Footer titleText='FOOTER' />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },

});


