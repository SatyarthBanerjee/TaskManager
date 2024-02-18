import React from "react";
import styles from "./Search.module.css";
const Searchandtitle = () => {
  return (
    <div className={styles.searchbar}>
      <h2>Dashboard</h2>
      <div className={styles.search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#98A2B3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input placeholder="Search Task"></input>
      </div>
    </div>
  );
};

export default Searchandtitle;