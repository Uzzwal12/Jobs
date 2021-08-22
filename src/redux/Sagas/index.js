import { takeLatest } from "redux-saga/effects";
import { userActions } from "../actionTypes";

import {
  userLoginSaga,
  userSignUpSaga,
  forgotPasswordSaga,
  changePasswordSaga,
} from "./auth";

export default function* watcherSaga() {
  // ---------------------------------------User---------------------------------------------//
  yield takeLatest(userActions.USER_SIGN_UP_INITIATE, userSignUpSaga);
  yield takeLatest(userActions.USER_LOGIN_INITIATE, userLoginSaga);
  yield takeLatest(userActions.FORGOT_PASSWORD_INITIATE, forgotPasswordSaga);
  yield takeLatest(userActions.CHANGE_PASSWORD_INITIATE, changePasswordSaga);
}
