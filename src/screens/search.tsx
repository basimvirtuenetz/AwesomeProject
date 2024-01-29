import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
    const themeMode = useSelector((state: any) => state.theme.mode)
    return (
        <View style={{ flex: 1, backgroundColor: themeMode.background }}>
            <Text style={{ color: themeMode.text }}>Search</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})