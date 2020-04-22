import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useRestaurants from "../hooks/useRestaurants";
const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  error: {
    color: "red",
  },
});

export default ({}) => {
  const [term, setTerm] = useState("indian");
  const [searchApi, results, error] = useRestaurants();
  return (
    <>
      <SearchBar
        term={term}
        onTermSubmit={() => searchApi(term)}
        onTermChange={setTerm}
      ></SearchBar>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Skyscraper"
          results={results.filter(({ price }) => price === "$$$$")}
        ></ResultsList>
        <ResultsList
          title="The Regular"
          results={results.filter(
            ({ price }) => price === "$$" || price === "$$$"
          )}
        ></ResultsList>
        <ResultsList
          title="Cheapo"
          results={results.filter(({ price }) => price === "$" || !price)}
        ></ResultsList>
      </ScrollView>
    </>
  );
};
