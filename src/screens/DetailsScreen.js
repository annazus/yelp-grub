import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import useRestaurantDetail from "../hooks/useRestaurantDetail";
const styles = StyleSheet.create({
  containerStyle: {},
  imageStyle: { width: 250, height: 125 },
});

export default ({ route, navigation }) => {
  const [detail, error] = useRestaurantDetail(route.params.id);
  return (
    <View style={styles.containerStyle}>
      <Text>Details Screen</Text>
      {error ? <Text>{error}</Text> : null}
      <FlatList
        data={detail.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.imageStyle}></Image>
        )}
      ></FlatList>
    </View>
  );
};
