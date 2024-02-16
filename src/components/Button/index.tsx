import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = () => {
    return (
        <View style={style.btnlog}>
        <TouchableOpacity>
          <Text style={style.text}> Sign In</Text>
           </TouchableOpacity> 
      </View>
    )
};

const style = StyleSheet.create({
    btnlog: {
        flexDirection: 'row',
        backgroundColor: '#F27108',
        justifyContent: 'center',
        margin: 30,
        padding: 15,
        borderRadius: 10,
      },
    text: {
      color: 'white',
      fontWeight: 'bold',
    }
});

export default Button;
