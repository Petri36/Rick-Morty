import { DELETE_FAVORITES, ADD_FAVORITES } from "./types";

export const addFavorites = (props) => {
  return {
    type: ADD_FAVORITES,
    payload: props,
  };
};
export const deleteFavorites = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};
