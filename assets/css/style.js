import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {

        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: 'red',
        height: '20%',
        width: '100%',
        justifyContent: 'space-between',

    },
    card: {
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    },
    menu: {
        fontSize: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
    },


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