import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const Input = ({ placeholder, type, label }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#fff'}
                keyboardType={type}
                aria-labelledby={label}
                style={styles.input}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        width: 270,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        paddingLeft: 20,
        color: '#fff',
    },
});
