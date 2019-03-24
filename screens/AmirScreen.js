import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AmirScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.headline}>Amir</Text>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    headline: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(10,0,100,0.4)',
    }
});