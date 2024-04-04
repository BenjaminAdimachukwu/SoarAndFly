import axios from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Set the base URL to your backend URL
});

export default axiosInstance;
