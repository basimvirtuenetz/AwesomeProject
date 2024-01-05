import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../colors/colors';

const Btn = ({ children, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={styles.btn}>{children}</TouchableOpacity>;
};

export default Btn;

const styles = StyleSheet.create({
    btn: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 20,
    },
});
