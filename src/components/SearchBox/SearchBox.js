import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = ({ handleSubmitFn, handleChangeFn }) => {
  return (
    <div className={styles.search__wrapper}>
      <form onSubmit={handleSubmitFn} className={styles.search__form}>
        <input
          onChange={handleChangeFn}
          type="text"
          placeholder="Search movie..."
          className={styles.search__input}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBox;
