import axios from 'axios';
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  export const logout = () => ({
    type: 'LOGOUT',
  });
  export const login = (credentials) => {
    return async (dispatch) => {
        console.log("check")
        try {
            const response = await axios.get(`http://localhost:9000/users/${credentials.username}`);
            if (response.status === 200 ) {
               
                    dispatch(loginSuccess(response.data));
               
            } else {
                dispatch(loginFailure(response.data.error));
            }
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};