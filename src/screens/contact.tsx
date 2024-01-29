import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const themeMode = useSelector((state: any) => state.theme.mode)
    return (
        <View style={{ flex: 1, backgroundColor: themeMode.background }}>
            <Text style={{ color: themeMode.text }}>Contact</Text>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})