import { StyleSheet, View } from 'react-native'
import React from 'react'

const Mainwrapp = ({ children }) => {
    return (
        <View style={styles.wrapper}>
            {children}
        </View>
    )
}

export default Mainwrapp

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 20,
        alignItems: "center"
    }
})