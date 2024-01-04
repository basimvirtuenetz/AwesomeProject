import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Headtxt = ({ message }) => {
    return (
        <View>
            <Text style={styles.headtext}>{message}</Text>
        </View>
    );
};

export default Headtxt;

const styles = StyleSheet.create({
    headtext: {
        fontSize: 30,
        fontWeight: 'normal',
        color: '#fff',
    },
});
