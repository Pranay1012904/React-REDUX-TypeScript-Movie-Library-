export const ADD_MOVIES = "ADD_MOVIES"; //action type

//action creator

export function addMovies(movies: any) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
