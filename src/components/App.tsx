import Navbar from "./navbar";
import MovieCard from "./movieCard";
import { data } from "../data";
import { propType } from "../typeConstants";
import { addMovies } from "../actions";
import React from "react";
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      movieTab: true,
    };
  }
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED!");
      this.forceUpdate();
      console.log(this.props.store.getState());
    });
    //API CALL
    store.dispatch(addMovies(data));
    console.log(this.props.store.getState());
  }

  isFavourite = (movie: any) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) return true;
    return false;
  };
  changeTabFavourite = () => {
    this.setState({ movieTab: false });
  };
  changeTabMovies = () => {
    this.setState({ movieTab: true });
  };
  render() {
    const { store } = this.props;
    const { movies } = store.getState();
    const { list, favourites } = movies;
    return (
      <div className="App">
        <section className="App-header">
          <div>
            <Navbar />
          </div>
        </section>
        <section className="content my-5">
          <div className="container card-wrap">
            <div className="row d-flex btn-row">
              <button onClick={this.changeTabMovies}>Movies</button>
              <button onClick={this.changeTabFavourite}>Favourites</button>
            </div>
            <div className="row card-row d-flex">
              {this.state.movieTab
                ? list.map((item: propType) => (
                    <MovieCard
                      movie={item}
                      key={item.Title}
                      dispatch={store.dispatch}
                      favourite={this.isFavourite(item)}
                    />
                  ))
                : favourites.map((item: propType) => (
                    <MovieCard
                      movie={item}
                      key={item.Title}
                      dispatch={store.dispatch}
                      favourite={this.isFavourite(item)}
                    />
                  ))}
              {favourites.length === 0 && !this.state.movieTab ? (
                <div>NO FAVOURITES !!</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
