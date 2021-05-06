import { SET_LISTINGS } from "../actions/listings";

const initialState = {
  listings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTINGS:
      return { listings: action.listings };
    default:
      return state;
  }
};
