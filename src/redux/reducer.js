import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      let favs = [...state.allCharacters];
      favs.push(action.payload);
      return {
        ...state,
        myFavorites: favs,
        allCharacters: [...favs],
      };

    case DELETE_FAVORITES:
      const filterFavorite = state.myFavorites.filter(
        (e) => e.id !== action.payload
      );
      return {
        allCharacters: filterFavorite,
        myFavorites: filterFavorite,
      };

    case FILTER:
      const filtered =
        action.payload === "All"
          ? state.allCharacters
          : state.allCharacters.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: filtered,
      };

    case ORDER:
      let orderCopy = [...state.allCharacters];
      if (action.payload === "Ascendente") {
        orderCopy.sort((a, b) => a.id - b.id);
      } else {
        orderCopy.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderCopy,
      };

    default:
      return state;
  }
}
