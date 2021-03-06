import * as R from "ramda";

import {
  FETCH_BOOKS_SUCCESS,
  LOAD_MORE_BOOKS_SUCCESS,
  SEARCH_BOOK,
} from "../actionTypes";

const initialState = {
  ids: [],
  search: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck("id", payload),
      });

    case LOAD_MORE_BOOKS_SUCCESS:
      const ids = R.pluck("id", payload);
      return R.merge(state, {
        ids: R.concat(state.ids, ids),
      });
    case SEARCH_BOOK:
      return R.merge(state, {
        search: payload,
      });

    default:
      return state;
  }
};
