import React from "react";
import styles from "./Homecont.module.css";
const HomeCont = () => {
  return (
    <div className={styles.homecont}>
      <h3>Task Manager</h3>
      <div className={styles.labels}>
        <p>Today</p>
        <p>Tomorrow</p>
        <p>Upcoming</p>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="902"
        height="3"
        viewBox="0 0 902 3"
        fill="none"
      >
        <path
          d="M2 1.5H900"
          stroke="#EDEDED"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg> */}
      <div className={styles.line}>
        <div className={styles.sublines}></div>
        <div className={styles.sublines}></div>
        <div className={styles.sublines}></div>
       
      </div>
      <div className={styles.tasks}>
        <div className={styles.today}>
          <div className={styles.todaycont}>
            <div className={styles.checkbox}></div>
            <div className={styles.checkbox}></div>
          </div>
          <div className={styles.todaycont}></div>
          <div className={styles.todaycont}></div>
        </div>
        <div className={styles.tomorrow}></div>
        <div className={styles.upcoming}></div>
      </div>
    </div>
  );
};

export default HomeCont;
