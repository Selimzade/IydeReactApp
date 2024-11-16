import axios from 'axios';

const API_BASE_URL = 'https://localhost:7005/api';

export const getPunkts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/punkts`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createPunkt = async (punkt) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/punkts`, punkt);
    return response.data; 
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};