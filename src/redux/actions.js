import { ADD_FAVORITES, DELETE_FAVORITES } from "./types";

export function addFavorites(character) {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
}

export function deleteFavorites(id) {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
}
