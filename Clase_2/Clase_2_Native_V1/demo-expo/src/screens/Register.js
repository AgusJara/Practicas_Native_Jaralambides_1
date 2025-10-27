import React, { Component } from "react";
import { Pressable,Text,StyleSheet,View,TextInput } from "react-native";
import { db,auth } from "../firebase/config";


class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:'',
            pass:'',
            user:'',
            registered: false,
            error: ''
        }
    }

    onSubmit(email,pass,user){
        auth.createUserWithEmailAndPassword(email,pass)
          .then(res => {
            this.setState({registered: true});
            db.collection('users').add({
              email: email,
              usuario: user,
              createdAt: Date.now()
            })
            .then()
            .catch(e => console.log(e));
            this.props.navigation.navigate("Login")
          })
          .catch(error => {
            this.setState({error: "Fallo en el registro"})
          })
        
    }

    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <TextInput
            style = {styles.input}
            keyboardType="default"
            placeholder="Nombre de usuario"
            onChangeText={text =>this.setState({user:text})}
            value={this.state.user}/>
            <TextInput
            style = {styles.input}
            keyboardType="email-address"
            placeholder="email"
            onChangeText={text =>this.setState({email:text})}
            value={this.state.email}/>
            <TextInput
            style = {styles.input}
            keyboardType="default"
            placeholder="password"
            secureTextEntry={true}
            onChangeText={text =>this.setState({pass:text})}
            value={this.state.pass}/>
            
            <Pressable style={styles.button} onPress={()=>this.onSubmit(this.state.email,this.state.pass,this.state.user)}>
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
  text: {
    fontSize: 16,
    color: "#333",
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
  },
});


export default Register;