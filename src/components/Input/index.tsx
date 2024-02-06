import React from 'react';
import {TextInput,StyleSheet} from 'react-native';

const Input = () => {
    return (
        <TextInput
        placeholder='Masukkan nama anda'
        style={style.input}
        />
    )
};

const style = StyleSheet.create({
    input: {
        borderWidth: 125,
        margin: 20,
        padding: 90,
        borderRadius: 'center',
    },
});

export default Input;
