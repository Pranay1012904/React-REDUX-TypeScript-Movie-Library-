export default function movies(state = [], action: any) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
