import { put } from "redux-saga/effects";
import { sendRequest } from "../../utils";
import {
  userSignUpFailure,
  userSignUpSuccess,
  userLoginSuccess,
  userLoginFailure,
  forgotPasswordFailure,
  forgotPasswordSuccess,
} from "../Actions/auth";
const url = process.env.REACT_APP_BASE_URL;

export function* userSignUpSaga({ payload }) {
  try {
    var config = {
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
    var config = {
      method: "get",
      url: `${url}auth/resetpassword?email=${payload}`,
      headers: {},
    };
    const result = yield sendRequest(config);
    console.log("result", result)
    yield put(forgotPasswordSuccess(result.data));
  } catch (error) {
    const errorString = error.message;
    yield put(forgotPasswordFailure(errorString));
  }
}
