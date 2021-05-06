import DATA from "../../data/carousel-data";
import { GET_CAROUSEL_DATA } from "../actions/carousels";

const initialState = {
  imageUrls: DATA,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL_DATA:
      return state;

    default:
      return state;
  }
};
