import React, { Component } from "react";
import { View } from "react-native";
import { Pressable, Text, StyleSheet, TextInput } from "react-native";
import { auth } from "../firebase/config";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            loggedIn: false,
            error: ''
        }
    }

    onSubmit(email,pass) {
        if(!email.includes("@")){
            this.setState({error:'Email mal formateado'})
            return;
        }
        if(pass.length < 6){
            this.setState({error:'La password debe tener una longitud de al menos 6 caracteres'})
            return;
        }
        auth.signInWithEmailAndPassword(email,pass)
            .then((res) => {
                this.setState({loggedIn: true});
                this.props.navigation.navigate("HomeMenu")
            })
            .catch(error => {
                this.setState({error:'Credenciales invalidas'})
            })
    }

    // recordame(user){
    //     auth.onAuthStateChanged(user=>{
    //         console.log(user);
            
    //     })
    // }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Ingresar</Text>
                <TextInput
                    style ={styles.input}
                    keyboardType="email-address"
                    placeholder="email"
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email} />
                <TextInput
                    style ={styles.input}
                    keyboardType="default"
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ pass: text })}
                    value={this.state.pass} />
                    <Text>{this.state.error}</Text>
                <Pressable style={styles.button} onPress={() => this.onSubmit(this.state.email,this.state.pass)}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </Pressable>
                {/* <Pressable style={styles.button} onPress={() => this.recordame()}>
                    <Text style={styles.buttonText}>Recordame</Text>
                </Pressable> */}
                
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
        backgroundColor: "#23e7eeff",
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
    },
});


export default Login;