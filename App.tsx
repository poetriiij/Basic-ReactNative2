import {Text, View, Image, ScrollView,TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import Input from './src/components/Input';
import Button from './src/components/Button';

const App = () => {
  return (
    <ScrollView style={style.body}>
       <Title/>
       <Input text="Username" placeholder="Masukan username anda" />
        <Input text= "Password" placeholder="Masukan password anda" />
        <Text />
        <Button/>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  inputcollumn: {
    borderWidth: 1,
    margin: 20,
    borderRadius: 17,
  },
});
export default App;
