import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 64Dee9FVeQ5huOn1D6HSq7avZTk72w4gxp3-uKwzQ6nAAjxMVKzzg-kWvy862Q9LZ5hVjhi0ZL24Yobyyr_Yw9_bJey-vXr9JhknRWgAs0JW_HkEeSZr5UHBOjWfXnYx",
  },
});
