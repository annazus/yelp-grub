import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const search = async () => {
      await searchApi("restaurants");
    };
    search();
  }, []);
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "seattle" },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError("Something went wrong" + error);
    }
  };

  return [searchApi, results, error];
};
