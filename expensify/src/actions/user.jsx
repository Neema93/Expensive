import axios from 'axios';
const API_URL = 'http://localhost:9000/users';

export const addUser = (user) => async (dispatch) => {
    const response = await axios.post(API_URL, user);
    dispatch({ type: 'ADD_USER', payload: response.data });
  };