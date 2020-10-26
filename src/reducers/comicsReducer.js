import {
  RECEIVE_COMICS,
  REQUEST_COMICS,
  ERROR_COMICS,
} from "../actions/requestComicsAction";

const initialState = {
  isLoading: false,
  entries: {},
  error: false,
};

export const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMICS:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_COMICS:
      return {
        isLoading: false,
        entries: action.payload,
        error: false,
      };
    case ERROR_COMICS:
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
