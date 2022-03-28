import { SET_LOADING } from "../actions/actionTypes";

export const initState = {
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
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
