"use client";
import React from "react";
import styles from "./forms.module.css";
import Updateframe from "../Updateframe";
const AddTask = ({showtask, show}) => {
  return (
    <>
      <div onClick={()=>{
        showtask(!show)
      }} className={styles.addtaskbg}></div>
      <div className={styles.addtask}>
        <h1>Task Name here</h1>
        <div className={styles.badge}>+</div>
        <div className={styles.btns}>
          <button>Today</button>
          <button>Tomorrow</button>
          <button>Upcoming</button>
        </div>
        <Updateframe />
        <button className={styles.addtaskbtn}>Add Task</button>
      </div>
    </>
  );
};

export default AddTask;
