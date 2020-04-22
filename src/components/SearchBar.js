import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const styles = StyleSheet.create({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "flex-start",
    height: 50,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 6,
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "#fefefe",
  },
  iconStyle: {
    marginHorizontal: 10,
    fontSize: 35,
    color: "grey",
    alignSelf: "center",
  },
  textInputStyle: {
    fontSize: 18,
    flex: 1,
  },
});
export default ({ term, onTermSubmit, onTermChange }) => {
  return (
    <View style={styles.containerStyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.textInputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};
