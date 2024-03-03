"use client";
import React from "react";
import styles from "./forms.module.css";
import Updateframe from "../Updateframe";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useCheckAuth } from '@/ContextAPI/CheckSetContext'
import axios from "axios";
import { useDataContext } from "@/ContextAPI/DataContext";
const AddTask = ({showtask, show}) => {
  const session = useSession();
  console.log(session.data.user.id);
  const {user_1} = useCheckAuth();
  const {addNewData} = useDataContext()
  const todaydate = new Date()
  const [tasks, setTasks] = useState( {
   
    
    task: '',
    tag: '',
    status: true,
    date: todaydate,
    mytype: '',
    userId: user_1? user_1?._id:"",
 
});
const [task_1, setTasks_1] = useState( {
   
    
  task: '',
  tag: '',
  status: true,
  date: todaydate,
  mytype: "today",
  email: session?.data?.user?.email || "",

});
const [tag, setTag] = useState(false);
const handletags= ()=>{
  setTag(!tag)
}
const handleChange =(value, name)=>{
  if (session!==""){
    setTasks_1((prevValue)=>{
      return{
        ...prevValue, [name]: value
      }
    })
    console.log(task_1);
  }
  else if(user_1!==""){
    setTasks((prevValue)=>{
      return{
        ...prevValue, [name]: value
      }
    })
  }

}
const handleTask=async(name)=>{
  if(task_1.task!=="" ){
    if(name==="today"){
      setTasks_1((prevValue)=>{
        return{...prevValue,mytype:"today"}
      })
    }
    // localStorage.setItem('userId', tasks.userId);
   addNewData(task_1)
  }
 
}
  return (
    <>
      <div onClick={()=>{
        showtask(!show)
      }} className={styles.addtaskbg}></div>
      <div className={styles.addtask}>
        <h1>Task Name here</h1>
        <div onClick={handletags} className={styles.badge}>+</div>
        {tag && <ul>
          <li><button value="Personal" onClick={(e)=>handleChange(e.target.value,"tag")}>Personal</button></li>
          <li ><button value="Academic" onClick={(e)=>handleChange(e.target.value,"tag")}>Academic</button></li>
          <li ><button value="Other" onClick={(e)=>handleChange(e.target.value,"tag")}>Other</button></li>
         
        </ul>}
        <div className={styles.btns}>
          <button>Today</button>
          <button>Tomorrow</button>
          <button>Upcoming</button>
        </div>
        <Updateframe 
          task = {session===""?tasks.task :task_1.task}
          handleChange = {handleChange}
        />
        <button onClick={()=>handleTask("today")} className={styles.addtaskbtn}>Add Task</button>
      </div>
    </>
  );
};

export default AddTask;
