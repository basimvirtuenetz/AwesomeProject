import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '../colors/colors';

const Input = ({ placeholder, type, label }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#fff'}
            keyboardType={type}
            aria-labelledby={label}
            style={styles.input}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        width: 270,
        height: 50,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        paddingLeft: 20,
        color: Colors.white,
    },
});
