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
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    errorText: {
        color: "red",
        textAlign: "center",
        fontSize: 30,
        marginBottom: 30
    }
});