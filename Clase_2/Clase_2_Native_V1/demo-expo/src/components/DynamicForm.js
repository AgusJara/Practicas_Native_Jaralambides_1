import React, { Component } from "react";
import { View } from "react-native";
import { Pressable, Text, StyleSheet, TextInput } from "react-native";

class DynamicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: ''
        }
    }

    onSubmit() {
        console.log("Comentario: ", this.state.comentario);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Comentario</Text>
                <TextInput
                    keyboardType="default"
                    placeholder="Escribi tu comentario..."
                    onChangeText={text => this.setState({ comentario: text })}
                    value={this.state.comentario} />

                <Pressable style={styles.button} onPress={() => this.onSubmit()}>
                    <Text style={styles.buttonText}>Enviar</Text>
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


export default DynamicForm;