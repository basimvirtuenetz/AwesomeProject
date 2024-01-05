import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '../colors/colors';

const Headtxt = ({ message }) => {
    return (
        <Text style={styles.headtext}>{message}</Text>
    );
};

export default Headtxt;

const styles = StyleSheet.create({
    headtext: {
        fontSize: 30,
        fontWeight: 'normal',
        color: Colors.white,
    },
});
