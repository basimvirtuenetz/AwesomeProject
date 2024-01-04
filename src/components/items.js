import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../colors/colors';

const Items = ({ children }) => {
    return <View style={styles.itemsview}>{children}</View>;
};

export default Items;

const styles = StyleSheet.create({
    itemsview: {
        width: '60%',
        height: 200,
        backgroundColor: Colors.grey,
        borderRadius: 30,
        margin: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
