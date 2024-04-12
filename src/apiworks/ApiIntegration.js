import axios from "axios";

// base URL
const URL = "https://d1krvzwx5oquy1.cloudfront.net/books.json";

// using Async and Await to GEt the data using axios
const ApiIntegration = {
  fetchBooks: async () => {
    try {
      const response = await axios.get(`${URL}`);
      return response.data;
    } catch (error) {
      console.error("Error Fetching Books:", error);
      throw error;
    }
  },
};

export default ApiIntegration;