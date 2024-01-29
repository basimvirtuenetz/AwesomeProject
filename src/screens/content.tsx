import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../colors/colors'
import { useSelector } from 'react-redux'

const Content = () => {
    const themeMode = useSelector((state: any) => state.theme.mode)
    return (
        <View style={{ backgroundColor: themeMode.background }}>
            <Text>Content</Text>
        </View>
    )
}

export default Content

const styles = StyleSheet.create({})