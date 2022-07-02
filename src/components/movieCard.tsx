import React from "react";
import { addFavourite, removeFavourite } from "../actions";
interface movieProp {
  movie: {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: any[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  };
}
class MovieCard extends React.Component<any> {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleRFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
  };
  render() {
    const { movie, favourite } = this.props;
    return (
      <div className="card my-3 card-dash" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4 poster-Div">
            <img src={movie.Poster} alt="..." />
            <div className="cover d-flex">
              <div className="container tab-a">
                <div className="row poster-box">
                  <div className="col-6 img-box">
                    <img src="https://play-lh.googleusercontent.com/hH-oRsfkhbQzVG5CuLRmdAlGonfQIlKa5sfmuT6vMWH0umY2ZpLp6w0zU0jySKdicKk" />
                  </div>
                  <div className="col-6 img-score">
                    {movie?.Ratings[1]?.Value}
                  </div>
                </div>
                <div className="row poster-box mt-1">
                  <div className="col-6 img-box">
                    <img src="https://iconape.com/wp-content/png_logo_vector/metacritic-logo-original.png" />
                  </div>
                  <div className="col-6 img-score">
                    {movie?.Ratings[2]?.Value}
                  </div>
                </div>
                <div className="row poster-box mt-1">
                  <div className="col-6 img-box">
                    <img src="https://icons.iconarchive.com/icons/danleech/simple/1024/imdb-icon.png" />
                  </div>
                  <div className="col-6 img-score">{movie?.imdbRating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Plot}</p>
              <div className="card-text flex-fv">
                <small className="text-muted">{movie.Released}</small>
                {favourite ? (
                  <button
                    className="btn btn-secondary"
                    onClick={this.handleRFavouriteClick}
                  >
                    <i className="fa fa-star" aria-hidden="true"></i>
                    Remove Favourite
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={this.handleFavouriteClick}
                  >
                    <i className="fa fa-star-o" aria-hidden="true"></i>Add
                    Favourite
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//<i className="fa fa-star-o" aria-hidden="true"></i>
export default MovieCard;
