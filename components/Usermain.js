import { View, Text, Button, StyleSheet } from 'react-native'

export default function Usermain({ username, setLogged, setPassword, setUsername }) {

    const handleLogout = () => {
        setLogged(false);
        setUsername(""); 
        setPassword("");
      };
    

    return (
        <View style={styles.form}>
            <Text style={styles.errorText} >Welcome {username}</Text>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
      backgroundColor: "#f5f5f5"
    },
    form: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold"
    },
    input: {
      height: 40,
      borderColor: "#ddd",
      borderWidth: 1,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      marginBottom: 50
    },
    errorText: {
      color: "red",
      textAlign: "center",
      fontSize: 30,
      marginBottom: 30
    }
  });