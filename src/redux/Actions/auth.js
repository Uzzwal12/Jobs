import { userActions } from "../actionTypes";

export const userSignUpInitiate = (data) => ({
  type: userActions.USER_SIGN_UP_INITIATE,
  payload: data,
});

export const userSignUpSuccess = (data) => ({
  type: userActions.USER_SIGN_UP_SUCCESS,
  payload: data,
});

export const userSignUpFailure = (data) => ({
  type: userActions.USER_SIGN_UP_FAILURE,
  payload: data,
});

export const userLoginInitiate = (data) => ({
  type: userActions.USER_LOGIN_INITIATE,
  payload: data,
});

export const userLoginSuccess = (data) => ({
  type: userActions.USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFailure = (data) => ({
  type: userActions.USER_LOGIN_FAILURE,
  payload: data,
});

export const forgotPasswordInitiate = (data) => ({
  type: userActions.FORGOT_PASSWORD_INITIATE,
  payload: data,
});

export const forgotPasswordSuccess = (data) => ({
  type: userActions.FORGOT_PASSWORD_SUCCESS,
  payload: data,
});

export const forgotPasswordFailure = (data) => ({
  type: userActions.FORGOT_PASSWORD_FAILURE,
  payload: data,
});

export const changePasswordInitiate = (data) => ({
  type: userActions.CHANGE_PASSWORD_INITIATE,
  payload: data,
});

export const changePasswordSuccess = (data) => ({
  type: userActions.CHANGE_PASSWORD_SUCCESS,
  payload: data,
});

export const changePasswordFailure = (data) => ({
  type: userActions.CHANGE_PASSWORD_FAILURE,
  payload: data,
});
