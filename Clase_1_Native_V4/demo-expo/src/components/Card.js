import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

function Card (props) {
    return(
        <View style={styles.card}>
            <Image source={{ uri: props.image }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.price}>${props.price}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  category: {
    color: "gray",
    fontStyle: "italic",
  },
  price: {
    color: "#2a9d8f",
    fontWeight: "bold",
    marginTop: 4,
  },
  description: {
    marginTop: 6,
    fontSize: 12,
  },
});

export default Card;