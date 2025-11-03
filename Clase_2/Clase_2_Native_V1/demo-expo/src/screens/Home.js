import React, { Component } from "react";
import { Text,View,StyleSheet,ActivityIndicator,FlatList } from "react-native";
import DynamicForm from "../components/DynamicForm";
import Post from "../components/Post";
import { db, auth } from "../firebase/config";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: ''
        }
    }

    componentDidMount() {
        db.collection('posts').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        posts: posts,
                        loading: false
                    })
                })
            },
            (error) => {
                this.setState({ error: 'Error al obtener los posts' })
            }
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lista de comentarios</Text>
                {this.state.loading ? (<ActivityIndicator size='large' color='green' />) : null}
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Post data={item}/>
                    )}
                />
                <DynamicForm />
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


export default Home;