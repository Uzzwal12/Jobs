import { takeLatest } from "redux-saga/effects";
import { userActions, postActions } from "../actionTypes";

import {
  userLoginSaga,
  userSignUpSaga,
  forgotPasswordSaga,
  changePasswordSaga,
} from "./auth";

import { createPostSaga } from "./post";

export default function* watcherSaga() {
  // ---------------------------------------User---------------------------------------------//
  yield takeLatest(userActions.USER_SIGN_UP_INITIATE, userSignUpSaga);
  yield takeLatest(userActions.USER_LOGIN_INITIATE, userLoginSaga);
  yield takeLatest(userActions.FORGOT_PASSWORD_INITIATE, forgotPasswordSaga);
  yield takeLatest(userActions.CHANGE_PASSWORD_INITIATE, changePasswordSaga);
  // ---------------------------------------Post---------------------------------------------//
  yield takeLatest(postActions.CREATE_NEW_POST_INITIATE, createPostSaga);

}
