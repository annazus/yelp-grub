import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import RestaurantSummary from "./RestaurantSummary";
const styles = StyleSheet.create({
  container: { marginBottom: 15, flex: 1 },
  title: { fontSize: 18, fontWeight: "bold", marginHorizontal: 15 },
});
export default ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={({ id }) => id}
        renderItem={({
          item: { id, image_url, name, review_count, rating },
        }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { id })}
            >
              <RestaurantSummary
                title={name}
                image_url={image_url}
                stars={rating}
                reviews={review_count}
              ></RestaurantSummary>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};
