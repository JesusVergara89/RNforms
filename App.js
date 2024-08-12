import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [isdarkmode, setIsdarkmode] = useState(false)

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isdarkmode ? "black" : "white"  }]}>
      <TextInput
        style={[styles.input, {borderColor: isdarkmode ? "white" : "black"}]}
        value={name} onChangeText={setName}
        placeholder='example@email.com'
      //secureTextEntry
      //keyboardType='default'
      //autoCapitalize='none'
      //autoCorrect={false}
      />

      {/**Text areas */}
      <TextInput
        style={[styles.input, styles.multilineText, {borderColor: isdarkmode ? "white" : "black"}]}
        placeholder='message'
        multiline
      />
      {/**Text areas */}

      {/**Switch */}
      <View style={styles.switchContainer} >
        <Text style={[styles.text, {color: isdarkmode ? "white" : "black"}]}>{isdarkmode ? 'Dark mode' : 'Light mode'}</Text>
        <Switch
          value={isdarkmode}
          onValueChange={() => setIsdarkmode((previousState) => !previousState)}

        />
      </View >
      {/**Switch */}


      <Text style={styles.text}>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top"
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  }
});
