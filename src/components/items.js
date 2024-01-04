import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Items = ({ children }) => {
    return <View style={styles.itemsview}>{children}</View>;
};

export default Items;

const styles = StyleSheet.create({
    itemsview: {
        width: '60%',
        height: 200,
        backgroundColor: 'grey',
        borderRadius: 30,
        margin: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
