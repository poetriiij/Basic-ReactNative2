import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
const Title = () => {
    return (
        <View>
            <Text style={style.welcome}>Welcome</Text>
        </View>
    );
};

const style = StyleSheet.create({
      welcome: {
        fontSize: 40,
        paddingLeft: 20,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 150,
        fontFamily: 'Helvetica Neue',
      },

});
export default Title;
