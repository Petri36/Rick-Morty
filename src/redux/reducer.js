import { ADD_FAVORITES, DELETE_FAVORITES } from "./types"

const initialState = {
    myFavorites: []
}
export default function rootReducer(state=initialState,action) {
    switch (action.type) {
        case ADD_FAVORITES:
            let favs = [...state.myFavorites];
      favs.push(action.payload);
      return {
        ...state,
        myFavorites: favs,
      };
        case DELETE_FAVORITES:
            const filterFavorite = state.myFavorites.filter(
                e=> e.id !== action.payload
            )
            return {
                ...state,
                myFavorites: filterFavorite
            }
        default:
            return state
    }
}