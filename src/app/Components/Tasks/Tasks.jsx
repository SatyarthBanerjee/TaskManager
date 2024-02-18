import React, { useEffect, useState } from "react";
import styles from "./tasks.module.css";
import Checkbox from "@/app/Components/Checkbox/Checkbox"
import AddTask from "../Forms/AddTask";
// import sound from "./metal-clang-sound-81634.mp3"
const Tasks = () => {
  const [checked , setChecked] = useState(false);
  const [showtask, setShowTask] = useState(false);
  
  const handleChange  = ()=>{
    setChecked(!checked);
    
    // const audio = new Audio(sound)
    // audio.play()
  }
  // useEffect(()=>{
  //   console.log(checked);
  // },[checked])
  const handleAddTask = ()=>{
    setShowTask(!showtask);
    // onBlur(!blur)
  
  }
  return (
    <div className={styles.content}>
    {showtask?<AddTask showtask={setShowTask}
      show={showtask}
    />:""}
      <div className={styles.buttons}>
        <div>
          {["Today", "Tomorrow", "Upcoming"].map((data) => {
            return <button>{data}</button>;
          })}
          
        </div>
        <div className={styles.addtask}>
          <button onClick={handleAddTask} >Add Task +</button>
        </div>
        
        
        
      </div>
      <div className={styles.taskcolumns}>
          <p>Tasks</p>
          <p>Field</p>
          <p>Status</p>
      </div>
      <div className={styles.tasks}>
          <Checkbox onCheck={handleChange}
            status={checked}
          />
      </div>
    </div>
  );
};

export default Tasks;
