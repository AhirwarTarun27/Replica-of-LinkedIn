import { GET_ARTICLES, SET_LOADING } from "../actions/actionTypes";

export const initState = {
  articles: [],
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;
