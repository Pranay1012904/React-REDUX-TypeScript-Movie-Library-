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
