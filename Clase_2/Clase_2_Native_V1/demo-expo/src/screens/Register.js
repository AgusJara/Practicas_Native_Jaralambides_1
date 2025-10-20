import React, { Component } from "react";
import { Pressable,Text,StyleSheet,View,TextInput } from "react-native";


class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            pass:'',
            user:''
        }
    }

    onSubmit(){
        console.log("Email: ", this.state.email);
        console.log("Password: ", this.state.pass);
        console.log("Usuario: ", this.state.user);
        
        
    }

    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
            keyboardType="default"
            placeholder="Nombre de usuario"
            onChangeText={text =>this.setState({user:text})}
            value={this.state.user}/>
            <TextInput
            keyboardType="email-address"
            placeholder="email"
            onChangeText={text =>this.setState({email:text})}
            value={this.state.email}/>
            <TextInput
            keyboardType="default"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={text =>this.setState({pass:text})}
            value={this.state.pass}/>
            
            <Pressable style={styles.button} onPress={()=>this.onSubmit()}>
                <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
            
            <Pressable style={styles.button} onPress={()=>this.props.navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Ir al login</Text>
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
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
});


export default Register;