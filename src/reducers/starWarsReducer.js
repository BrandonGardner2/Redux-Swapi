import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        characters: action.payload,
        fetching: false,
        error: null
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: `${action.payload.status} : ${action.payload.data.error.message}`
      };
    default:
      return state;
  }
};
