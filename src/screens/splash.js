import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../colors/colors'

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome!</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pvoilet,
        justifyContent: 'center',
        alignItems: "center"
    },
    heading: {
        fontSize: 36,
        color: Colors.white,
        textAlign: 'center'
    }
})