import Listing from "../../models/Listing";
export const SET_LISTINGS = "SET_LISTINGS";

export const fetchListings = (query, limit) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&limit=${limit}`,
        {
          headers: { "Content-Type": "application/json" },
          method: "GET",
        }
      );

      if (!response.ok) {
        throw 1;
      }
      const responseData = await response.json();
      const loadedListings = [];
      for (const key in responseData.results) {
        loadedListings.push(
          new Listing(
            responseData.results[key].mal_id.toString(),
            responseData.results[key].title,
            responseData.results[key].image_url
          )
        );
      }
      dispatch({ type: SET_LISTINGS, listings: loadedListings });
    } catch (error) {
      throw error;
    }
  };
};
