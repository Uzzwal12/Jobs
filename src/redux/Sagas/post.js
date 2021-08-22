import { put } from "redux-saga/effects";
import { sendRequest } from "../../utils";

import { createNewPostFailure, createNewPostSuccess } from "../Actions/post";
const url = process.env.REACT_APP_BASE_URL;

export function* createPostSaga({ payload }) {
  try {
    const config = {
      method: "post",
      url: `${url}/jobs/`,
      headers: {
        Authorization: `${payload.token}`,
        "Content-Type": "application/json",
      },
      data: payload.newPost,
    };
    const result = yield sendRequest(config);
    yield put(createNewPostSuccess(result.data));
  } catch (err) {
    const errorString = err.message;
    yield put(createNewPostFailure(errorString));
  }
}
