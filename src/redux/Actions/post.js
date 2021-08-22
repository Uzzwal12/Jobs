import { postActions } from "../actionTypes";

export const createNewPostInitiate = (data) => ({
  type: postActions.CREATE_NEW_POST_INITIATE,
  payload: data,
});

export const createNewPostSuccess = (data) => ({
  type: postActions.CREATE_NEW_POST_SUCCESS,
  payload: data,
});

export const createNewPostFailure = (data) => ({
  type: postActions.CREATE_NEW_POST_FAILURE,
  payload: data,
});

export const clearPostData = () => ({
  type: postActions.CLEAR_POST_DATA,
});
