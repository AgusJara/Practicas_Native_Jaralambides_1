import React, { Component } from "react";
import { Pressable, Text, StyleSheet, View, TextInput, ActivityIndicator, FlatList } from "react-native";
import { db, auth } from "../firebase/config";
import firebase from "firebase";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comentarios: [],
            loading: true
        }
    }

    actualizarData(){
        db.collection('posts')
        .doc(this.props.data.id)
        .update({
            like: this.props.data.data.like.includes(auth.currentUser.email) 
            ? firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
            :firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(()=>{
            //codigo
        });
    }


    render() {
        return (
            <View style={styles.userCard}>
                <Text style={styles.name}>{this.props.data.data.comentario} -{this.props.data.data.email}- -{this.props.data.data.like.length}-</Text>
            <Pressable onPress={()=>this.actualizarData()}>
                <Text>{this.props.data.data.like.includes(auth.currentUser.email)? '❤️': '💔'}
                </Text>
            </Pressable>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#20ca89ff",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    userCard: {
        backgroundColor: "#d921a8ff",
        padding: 10,
        marginBottom: 8,
        borderRadius: 8,
    },
    name: {
        fontWeight: "bold",
    },
});

export default Post;