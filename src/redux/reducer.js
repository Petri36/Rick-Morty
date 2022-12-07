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
      let filterCopy = [...state.allCharacters];
      let filter = filterCopy.filter(ch => ch.gender === action.payload);
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER:
      let orderCopy = [...state.allCharacters];
        if (action.payload === "Ascendente") {
          orderCopy.sort((a, b) => a.id - b.id);
        }
        else{
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
