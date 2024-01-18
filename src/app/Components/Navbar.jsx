import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.pfp}>
        <Image rel="preload" src="/Assets/pfp.png" width={80} height={80} />
      </div>
      <div className={styles.listnavs}>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M12.8645 11.8208H12.0515L11.7633 11.5429C12.7719 10.3696 13.3791 8.84648 13.3791 7.18954C13.3791 3.49485 10.3842 0.5 6.68954 0.5C2.99485 0.5 0 3.49485 0 7.18954C0 10.8842 2.99485 13.8791 6.68954 13.8791C8.34648 13.8791 9.86964 13.2719 11.0429 12.2633L11.3208 12.5515V13.3645L16.4666 18.5L18 16.9666L12.8645 11.8208ZM6.68954 11.8208C4.12693 11.8208 2.05832 9.75214 2.05832 7.18954C2.05832 4.62693 4.12693 2.55832 6.68954 2.55832C9.25214 2.55832 11.3208 4.62693 11.3208 7.18954C11.3208 9.75214 9.25214 11.8208 6.68954 11.8208Z"
                fill="#1E1E1E"
              />
            </svg>
            <p>Search</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M16 0.5H2C0.9 0.5 0 1.4 0 2.5V16.5C0 17.6 0.89 18.5 2 18.5H16C17.1 18.5 18 17.6 18 16.5V2.5C18 1.4 17.1 0.5 16 0.5ZM16 16.5H2V13.5H5.56C6.25 14.69 7.53 15.5 9.01 15.5C10.49 15.5 11.76 14.69 12.46 13.5H16V16.5ZM16 11.5H11.01C11.01 12.6 10.11 13.5 9.01 13.5C7.91 13.5 7.01 12.6 7.01 11.5H2V2.5H16V11.5Z"
                fill="#1E1E1E"
              />
            </svg>
            <p>Tasks</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
            >
              <path
                d="M16.2 2.39998H15.3V0.599976H13.5V2.39998H4.5V0.599976H2.7V2.39998H1.8C0.81 2.39998 0 3.20998 0 4.19998V18.6C0 19.59 0.81 20.4 1.8 20.4H16.2C17.19 20.4 18 19.59 18 18.6V4.19998C18 3.20998 17.19 2.39998 16.2 2.39998ZM16.2 18.6H1.8V8.69998H16.2V18.6ZM16.2 6.89998H1.8V4.19998H16.2V6.89998Z"
                fill="#1E1E1E"
              />
            </svg>
            <p>Meetings</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
            >
              <path
                d="M0 11H18V13H0V11ZM16 6V7H2V6H16ZM18 4H0V9H18V4ZM0 0H18V2H0V0Z"
                fill="#1E1E1E"
              />
            </svg>
           <p>Upcoming</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M9 0.5C4.0401 0.5 0 4.5401 0 9.5C0 14.4599 4.0401 18.5 9 18.5C13.9599 18.5 18 14.4599 18 9.5C18 4.5401 13.9599 0.5 9 0.5ZM9 2.3C12.9871 2.3 16.2 5.51289 16.2 9.5C16.2 13.4871 12.9871 16.7 9 16.7C5.01289 16.7 1.8 13.4871 1.8 9.5C1.8 5.51289 5.01289 2.3 9 2.3ZM12.8637 6.16367L7.2 11.8273L5.13633 9.76367L3.86367 11.0363L7.2 14.3727L14.1363 7.43633L12.8637 6.16367Z"
                fill="#1E1E1E"
              />
            </svg>
            <p>Completed</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
