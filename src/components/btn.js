import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Btn = ({ children }) => {
    return (
        <View style={styles.btn}>
            {children}
        </View>
    )
}

export default Btn

const styles = StyleSheet.create({
    btn: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 20,
    },
})