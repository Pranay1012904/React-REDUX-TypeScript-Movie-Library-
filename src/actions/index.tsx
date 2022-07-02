export const ADD_MOVIES = "ADD_MOVIES"; //action type
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_SEARCH_MOVIE = "ADD_SEARCH_MOVIE";
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

export function handleMovieSearch(text: string) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${text}`;
  return function (dispatch: any) {
    fetch(url)
      .then((response: any) => {
        //console.log("Response------", response.json());
        return response.json();
      })
      .then((movie: any) => {
        console.log("MOVIE--------", movie);
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie: any) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}

export function addSearchedMovie(movie: any) {
  return {
    type: ADD_SEARCH_MOVIE,
    movie,
  };
}
