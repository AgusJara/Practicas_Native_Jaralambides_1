import React, { Component } from "react";
import { Pressable,Text,StyleSheet,View,TextInput } from "react-native";
import { db,auth } from "../firebase/config";


class NuevoPost extends Component{
    constructor(props){
        super(props);
        this.state ={
            comentario:'',
            error: ''
        }
    }

    onSubmit(){
        if(this.state.comentario === ''){
            this.setState({error:'El mensaje no puede estar vacio'})
            return;
        }
            db.collection('posts').add({
              email: auth.currentUser.email,
              comentario: this.state.comentario,
              createdAt: Date.now(),
              like:[]
            })
            .then(()=>{
                console.log("Comentario registrado en firestore");
                this.setState({comentario: '', error: ''})
            })
            .catch(e => {
                console.log(e)
                this.setState({error: 'Error al registrar el comentario'})
            });
                this.props.navigation.navigate("Home")
        
    }

    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Agregar posteo</Text>
            <TextInput
            style = {styles.input}
            keyboardType="default"
            placeholder="Escribi tu comentario"
            onChangeText={text =>this.setState({comentario:text})}
            value={this.state.comentario}/>
            
            <Pressable style={styles.button} onPress={()=>this.onSubmit()}>
                <Text style={styles.buttonText}>Publicar</Text>
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


export default NuevoPost;