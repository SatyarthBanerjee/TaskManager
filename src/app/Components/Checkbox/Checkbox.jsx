import React from "react";
import styles from "./Checkbox.module.css";
const Checkbox = ({onCheck, status}) => {
  return (
    <div onClick={onCheck} className={status?`${styles.active}`:`${styles.checkbox}`}>
      {status&& <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
          stroke="#7F56D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>}
    </div>
  );
};

export default Checkbox;
