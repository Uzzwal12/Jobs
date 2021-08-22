import { createSelector } from "reselect";

export const getPostMemoizedData = createSelector(
  (state) => state.postReducer,
  (postState) => {
    const { createPostLoader, postsData, error, newPostSuccess, modalShow } =
      postState;

    return { createPostLoader, postsData, error, newPostSuccess, modalShow };
  }
);
