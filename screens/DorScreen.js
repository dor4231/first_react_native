import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DorScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.headline}>
                    <Text style={styles.text}>Dor</Text>
                </View>
            </View>
        )

    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(10,0,160,0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headline: {
        textAlign: 'center',
        // backgroundColor: 'rgba(10,0,100,0.4)',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    text: {
        fontSize: 100,
        justifyContent: 'center'
    }
});