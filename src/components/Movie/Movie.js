import React from "react";
import styles from "./Movie.module.scss";

const Movie = ({ imagePoster }) => {
  return (
    <div className={styles.movie__wrapper}>
      <div className={styles.movie__card}>
        <img
          className={styles.movie__img}
          src={
            imagePoster !== null
              ? `https://image.tmdb.org/t/p/w185${imagePoster}`
              : `https://source.unsplash.com/random/185x278`
          }
          alt="card name"
        />
        <div className={styles.movie__details}>
          <a href="#">View details</a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
