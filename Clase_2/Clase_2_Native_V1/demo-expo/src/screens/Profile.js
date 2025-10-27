import React from "react";
import { View } from "react-native";
import { Pressable,Text,StyleSheet } from "react-native";

function Profile (props) {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Mi Perfil</Text>
        <Pressable style={styles.button} onPress={()=>props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Desloguearse</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#23e7eeff",
    padding: 25,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#a4cf2eff",
    padding: 10,
    margin: 5

  },
  input: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#cf8c2eff",
    padding: 10,
    margin: 5,

  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Profile;

