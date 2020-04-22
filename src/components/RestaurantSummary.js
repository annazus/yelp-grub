import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 10,
  },
  image: { width: 250, height: 125, marginBottom: 10 },
  titleStyle: { fontWeight: "bold", marginBottom: 5 },
  ratingStyle: { color: "grey" },
});

export default ({ image_url, title, stars, reviews }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: image_url }}
      style={styles.image}
      resizeMode="cover"
      resizeMethod="scale"
    ></Image>
    <Text style={styles.titleStyle}>{title}</Text>
    <Text
      style={styles.ratingStyle}
    >{`${stars} Stars, ${reviews} Reviews`}</Text>
  </View>
);
