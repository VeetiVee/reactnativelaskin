import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState('');
  
  const plus = () => {
    setTotal(number1 + number2);
    setNumber1('');
    setNumber2('');
  };

  const minus = () => {
    setTotal(number1 - number2);
    setNumber1('');
    setNumber2('');
  };

  return (
    <View style={styles.container}>
      <Text>Result: {total} </Text>
      <TextInput 
      style={{width:200, borderColor: 'gray', borderWidth:1}}
      keyboardType={"number-pad"}
      onChangeText={text => setNumber1(parseInt(text))}
      value={number1}
      />
       <TextInput 
      style={{width:200, borderColor: 'gray', borderWidth:1}}
      keyboardType={"number-pad"}
      onChangeText={text => setNumber2(parseInt(text))}
      value={number2}
      />
      <View style ={{flexDirection: 'row'}}>
      <Button onPress={plus} title= "+" />
      <Button onPress={minus} title= "-" />
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
