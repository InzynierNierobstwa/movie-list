import React from "react";
import styles from "./MovieList.module.scss";
import Movie from "../Movie/Movie";

class MovieList extends React.Component {
  render() {
    const { moviesData } = this.props;
    return (
      <div className={styles.movieList__wrapper}>
        <div className={styles.movieList__item}>
          {moviesData.map((movie, i) => {
            return <Movie key={i} imagePoster={movie.poster_path} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
