import {Button,Text, View, Image, ScrollView,TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Filkom from './assets/Filkom.png'

const App = () => {
  return (
    <ScrollView style={style.body}>
      <Image style={style.img1} source={Filkom}/>
      <Text style={style.welcome}>Hello, Welcome to MAD Class!</Text>
      <TextInput
        style={style.inputcollumn}
        placeholder="Nama sesuai SIU"
        placeholderTextColor="black"
      />
      <TextInput
        style={style.inputcollumn}
        placeholder="NIM"
        placeholderTextColor="black"
        secureTextEntry
      />
      <View style={style.btnlog}>
        <Button title="Join Class" color="black" />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  img1: {
    paddingTop: 150,
    width: 230,
    height: 150,
    alignSelf: 'center',
  },
  inputcollumn: {
    borderWidth: 1,
    margin: 20,
    borderRadius: 17,
  },
  btnlog: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    lineHeight: 150,
    fontFamily: 'Helvetica Neue',
  },
});
export default App;