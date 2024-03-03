"use client"
import { useState } from "react"
import React from 'react'
import styles from "./tasks.module.css"
import  Checkbox from "@/app/Components/Checkbox/Checkbox"
import { MyTag1, MyTag2, MyTag3 } from "../Tags/MyTags"
import { Mystatus1, Mystatus2, Mystatus3 } from "../Status/Mystatus"
const TodayTask = ({task, tag}) => {
  const [checked , setChecked] = useState(false);
  const handleChange  = ()=>{
    setChecked(!checked);
    
    // const audio = new Audio(sound)
    // audio.play()
  }
  console.log(tag);
  return (
    <div className={styles.todaytask}>
      <Checkbox onCheck={handleChange} status={checked} />
      <div className={styles.taskdetails}>
        <div className={styles.taskname}>
          <p>{task}</p>
        </div>
        <div className={styles.mytags}>
          {tag === "Personal" ? <MyTag1 /> : ""}
          {tag === "Academic" ? <MyTag2 /> : ""}
          {tag === "Other" ? <MyTag3 /> : ""}
        </div>
        <div className={styles.mystatus}>
          <Mystatus3 />
        </div>
      </div>
    </div>
  );
}

export default TodayTask
