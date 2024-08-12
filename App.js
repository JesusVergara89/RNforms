import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      style={styles.input}
      value={name} onChangeText={setName}
      placeholder='example@email.com'
      //secureTextEntry
      //keyboardType='default'
      //autoCapitalize='none'
      //autoCorrect={false}
      />
      <Text style={styles.text}>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: StatusBar.currentHeight
  },
  input:{
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
