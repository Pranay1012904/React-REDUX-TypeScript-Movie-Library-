import react from "React";
import { propType } from "../typeConstants";
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
const MovieCard: React.FunctionComponent<movieProp> = ({ movie }) => {
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
            <p className="card-text">
              <small className="text-muted">{movie.Released}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
