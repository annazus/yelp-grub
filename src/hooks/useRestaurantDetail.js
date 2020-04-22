import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
  const [detail, setDetail] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    detailApi(id);
  }, [id]);

  const detailApi = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setDetail(response.data);
    } catch (error) {
      setError("Something went wrong" + error);
    }
  };

  return [detail, error];
};
