import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, text}) => {
    return (
        <View>
          <Text style={style.text}> {text}  </Text>
            <TextInput placeholder={placeholder} style={style.input} />
        </View>
    );
};
  
const style = StyleSheet.create({
    input: {
      borderWidth: 1,
      margin: 20,
      padding: 10,
      borderRadius: 10,
    },
    text: {
      fontSize: 20,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 25,
        fontFamily: 'Helvetica Neue',
    }
});

export default Input;
