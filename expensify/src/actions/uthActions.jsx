// actions/authActions.js

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

// Example of an asynchronous login action
export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    // Replace with your login API call
    const response = await fakeLoginApi(credentials);
    dispatch(loginSuccess(response.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
