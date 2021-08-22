import { put } from "redux-saga/effects";
import { sendRequest } from "../../utils";
import {
  userSignUpFailure,
  userSignUpSuccess,
  userLoginSuccess,
  userLoginFailure,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  changePasswordFailure,
  changePasswordSuccess
} from "../Actions/auth";
const url = process.env.REACT_APP_BASE_URL;

export function* userSignUpSaga({ payload }) {
  try {
    const config = {
      method: "post",
      url: `${url}auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };
    const result = yield sendRequest(config);
    console.log("result", result);
    yield put(userSignUpSuccess(result.data));
  } catch (error) {
    const errorString = error.message;
    yield put(userSignUpFailure(errorString));
  }
}

export function* userLoginSaga({ payload }) {
  try {
    const config = {
      method: "post",
      url: `${url}auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };
    const result = yield sendRequest(config);
    yield put(userLoginSuccess(result.data));
  } catch (error) {
    const errorString = error.message;
    yield put(userLoginFailure(errorString));
  }
}

export function* forgotPasswordSaga({ payload }) {
  try {
    const config = {
      method: "get",
      url: `${url}auth/resetpassword?email=${payload}`,
      headers: {},
    };
    const result = yield sendRequest(config);
    yield put(forgotPasswordSuccess(result.data));
  } catch (error) {
    const errorString = error.message;
    yield put(forgotPasswordFailure(errorString));
  }
}

export function* changePasswordSaga({ payload }) {
  try {
    const config = {
      method: 'post',
      url: `${url}auth/resetpassword`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : payload
    };
    const result = yield sendRequest(config);
    yield put(changePasswordSuccess(result.data));
  } catch (error) {
    const errorString = error.message;
    yield put(changePasswordFailure(errorString));
  }
}
