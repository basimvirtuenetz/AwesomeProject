import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { Colors } from '../colors/colors'
import { Fonts } from '../fonts/fonts'
import Slsh from '../components/reuseablecomps/slsh'

const Splash = () => {
    return (
        <Slsh>
            <Text style={styles.heading}>Welcome !</Text>
        </Slsh>
    )
}

export default Splash

const styles = StyleSheet.create({
    heading: {
        fontSize: 36,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: Fonts.bold
    }
})