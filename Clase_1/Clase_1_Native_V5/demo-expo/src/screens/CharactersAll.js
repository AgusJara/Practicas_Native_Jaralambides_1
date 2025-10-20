import React,{Component} from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

class CharactersAll extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters: []

        }
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            this.setState({
            characters: data.results 
      });
    })
    .catch(error => console.log(error));
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Lista de personajes</Text>
                <FlatList
                    data={this.state.characters}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item})=> 
                    <Card
                    name={item.name}
                    species={item.species}
                    gender={item.gender}
                    image={item.image}
                    />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default CharactersAll;