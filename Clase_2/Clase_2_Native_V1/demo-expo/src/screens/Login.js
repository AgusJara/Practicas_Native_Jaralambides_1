import React, { Component } from "react";
import { View } from "react-native";
import { Pressable, Text, StyleSheet, TextInput } from "react-native";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }
    }

    onSubmit() {
        console.log("Email: ", this.state.email);
        console.log("Password: ", this.state.pass);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ingresar</Text>
                <TextInput
                    keyboardType="email-address"
                    placeholder="email"
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email} />
                <TextInput
                    keyboardType="default"
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ pass: text })}
                    value={this.state.pass} />

                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={styles.buttonText}>Ir al registro</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => this.props.navigation.navigate("HomeMenu")}>
                    <Text style={styles.buttonText}>Ir a la app</Text>
                </Pressable>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        padding: 25,
        borderRadius: 10,
        margin: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    button: {
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "500",
    },
});


export default Login;