import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";
let initialMovieState: any = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMovieState, action: any) {
  /*if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;*/
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITE:
      const { favourites } = state;
      const modifiedFav = favourites.filter(
        (item: any) => item != action.movie
      );
      return {
        ...state,
        favourites: [...modifiedFav],
      };
    default:
      return state;
  }
}
