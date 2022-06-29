import { ADD_MOVIES } from "../actions";
let initialMovieState = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMovieState, action: any) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
