import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <div className={styles.navbar__wrapper}>
        <a className={styles.navbar__logo} href="#">
          Movie Finder
        </a>
      </div>
    </nav>
  );
};

export default Nav;
