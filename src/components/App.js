import React from "react";
import styles from "./App.module.css";
import Nav from "../components/Nav/Nav";
import SearchBox from "../components/SearchBox/SearchBox";
import MovieList from "../components/MovieList/MovieList";

class App extends React.Component {
  state = {
    movies: [],
    searchTerm: "",
    totalResults: 0,
    currentPage: 1
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=de71ff430ed31703d6bcc445359e71b2&query=${this.state.searchTerm}`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({ movies: [...data.results] });
        console.log(data);
      });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className={styles.app__wrapper}>
        <Nav />
        <SearchBox
          handleChangeFn={this.handleChange}
          handleSubmitFn={this.handleSubmit}
        />
        <MovieList moviesData={this.state.movies} />
      </div>
    );
  }
}

export default App;
