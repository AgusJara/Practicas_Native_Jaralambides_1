import React, { Component } from "react";
import { Pressable, Text, StyleSheet, View, TextInput, ActivityIndicator, FlatList } from "react-native";
import { db, auth } from "../firebase/config";

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            loading: true
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        usuarios: users,
                        loading: false
                    })
                })
            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Usuarios</Text>
                {this.state.loading?(<ActivityIndicator size='large' color='green'/>):null}
                <FlatList
                    data={this.state.usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.userCard}>
                            <Text style={styles.name}>{item.data.email}</Text>
                        </View>
                    )}
                />
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

export default Usuarios;