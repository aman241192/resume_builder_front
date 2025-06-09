// src/api.js
import axios from 'axios';
import { apiEndPoints } from '../apiEndPoints';

const sellerApi = axios.create({
  baseURL: apiEndPoints.BASIC_URL_SELLER, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include credentials for cross-origin requests

});


// Function to handle GET requests
export const getAxios = async (url) => {
  try {
    const response = await sellerApi.get(url);
      // if(response.status==="201"){
        return response?.data?.data;
      // }
  } catch (error) {
    handleError(error);
  }
};

// Function to handle POST requests
export const postData = async (url, data) => {
  try {
    const response = await sellerApi.post(url, data);
      return response?.data;
  } catch (error) {
     handleError(error);
  }
};

// Function to handle PUT requests
export const putAxios = async (url, data) => {
  try {
    const response = await sellerApi.put(url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle DELETE requests
export const removeAxios = async (url) => {
  try {
    const response = await sellerApi.delete(url);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Centralized error handling
const handleError = (error) => {
  // You can customize the error handling as needed
  console.error('API Error:', error);
  throw error; // Re-throw the error if you want to handle it further up the call chain
};
