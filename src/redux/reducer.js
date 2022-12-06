import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      let favs = [...state.myFavorites];
      let allCh = [...state.allCharacters];
      favs.push(action.payload);
      allCh.push(action.payload);
      return {
        ...state,
        myFavorites: favs,
        allCharacters: allCh,
      };

    case DELETE_FAVORITES:
      const filterFavorite = state.myFavorites.filter(
        (e) => e.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filterFavorite,
      };

    case FILTER:
      let filterCopy = [...state.allCharacters];
      let filter = filterCopy.filter((ch) => ch.gender === action.payload);
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER:
      let allCharacters = [];
      let orderCopy = [...state.allCharacters];
      let order = orderCopy.sort((a, b) => {
        if (action.payload === "Ascendente") {
          order = allCharacters.sort((a, b) => (a.id > b.id ? 1 : -1));
        }
        if (action.payload === "Descendente") {
          order = allCharacters.sort((a, b) => (a.id > b.id ? -1 : 1));
        }
        else {
          return 0
        }
        return {
          ...state,
          myFavorites: order,
        };
      });

    default:
      return state;
  }
}
