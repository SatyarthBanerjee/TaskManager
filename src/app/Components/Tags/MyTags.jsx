import React from "react";
import styles from "./tags.module.css";
const MyTag1 = () => {
  return (
    <div className={styles.personal}>
      <div className={styles.circle1}></div>
      <p>Personal</p>
    </div>
  );
};
const MyTag2 = () => {
  return (
    <div className={styles.academic}>
      <div className={styles.circle2}></div>
      <p>Academic</p>
    </div>
  );
};
const MyTag3 = () => {
  return (
    <div className={styles.other}>
      <div className={styles.circle3}></div>
      <p>Other</p>
    </div>
  );
};

export { MyTag1, MyTag2, MyTag3 };
