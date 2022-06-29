export const ADD_MOVIES = "ADD_MOVIES"; //action type
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

//action creator

export function addMovies(movies: any) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie: any) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

export function removeFavourite(movie: any) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}
