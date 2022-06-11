import Navbar from "./navbar";
import MovieCard from "./movieCard";
import { data } from "../data";
import { propType } from "../typeConstants";
function App() {
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
            <button>Movies</button>
            <button>Favourites</button>
          </div>
          <div className="row card-row d-flex">
            {data.map((item: propType) => (
              <MovieCard movie={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
