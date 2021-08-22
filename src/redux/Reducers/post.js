import { postActions } from "../actionTypes";

const initialState = {
  createPostLoader: false,
  error: "",
  newPostSuccess: false,
  postsData: [],
};

export default function postReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case postActions.CREATE_NEW_POST_INITIATE:
      return {
        ...state,
        createPostLoader: true,
        newPostSuccess: false,
      };

    case postActions.CREATE_NEW_POST_SUCCESS:
      const postsData = [...state.postsData, payload];

      return {
        ...state,
        createPostLoader: false,
        postsData: postsData,
        newPostSuccess: true,
      };

    case postActions.CREATE_NEW_POST_FAILURE:
      return {
        ...state,
        createPostLoader: false,
        error: payload,
        newPostSuccess: false,
      };

    case postActions.CLEAR_POST_DATA:
      return {
        ...state,
        createPostLoader: false,
        error: "",
        newPostSuccess: false,
      };

    default:
      return state;
  }
}
