import React from "react";
import { addSearchedMovie, handleMovieSearch } from "../actions";
class Navbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleChange = (e: any) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleSearch = () => {
    const { searchText }: any = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleAddToMovie = (movie: any) => {
    this.props.dispatch(addSearchedMovie(movie));
  };
  render() {
    const { result, showSearchResult } = this.props.search;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>

            <div className="search-bar">
              <div>
                <input
                  className="form-control mr-sm-2"
                  placeholder="Search"
                  onChange={this.handleChange}
                  value={this.state?.searchText}
                />
              </div>
              {showSearchResult ? (
                <div className="search-result">
                  {result.Title}
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleAddToMovie(result)}
                  >
                    ADD MOVIE
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
