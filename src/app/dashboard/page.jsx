"use client"
import React, { useRef } from 'react'
import Datepicker from '../Components/Datepicker'
import { DatePicker } from 'antd'
import { useAuth } from '@/ContextAPI/AuthContext'
import { useState } from 'react'
import axios from 'axios'
import { useCheckAuth } from '@/ContextAPI/CheckSetContext'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import AddTask from '../Components/Forms/AddTask'
import styles from "./dashboard.module.css"
const page = () => {
  const {user} = useAuth()
  const {user_1} = useCheckAuth();
  const {signcontextOut}= useCheckAuth();
  const session = useSession();
  const todaydate = new Date()
  const [tasks, setTasks] = useState( {
   
    
      task: '',
      tag: '',
      status: true,
      date: todaydate,
      mytype: '',
      userId: user_1? user_1?._id:"",
   
  });
  console.log(user_1);
  useEffect(()=>{
    if(user_1){
      setTasks((prevValue)=>{
        return { ...prevValue, userId: user_1._id };
      })
    }
  },[user_1])
  console.log(user);
  // const storedUserId = localStorage.getItem('userId') || '';
  const handleChange =(value, name)=>{
    setTasks((prevValue)=>{
      return{...prevValue ,[name]: value}
    })
    console.log(tasks);
    console.log(tasks.userId);
  }
  const handleTask=async(name)=>{
    if(tasks.task!=="" ){
      if(name==="todaytask"){
        setTasks((prevValue)=>{
          return{...prevValue,mytype:"today"}
        })
      }
      // localStorage.setItem('userId', tasks.userId);
      const res = await axios.post("http://localhost:4000/",  tasks)
      if(res.status===201){
        alert('Added Successfully')
      }
    }
   
  }
  const handleSignout=()=>{
    if(user!=="" || user_1!==""){
      signcontextOut();
    }
    else if(session?.data?.user){
      
    }
    signOut("google")

  }
  const count = useRef(0)
  return (
    <div className={styles.dashboard}>
    {/*sample form*/}
      {/* <input onChange={e=>handleChange(e.target.value, "task")} value={tasks.task} placeholder="add task"></input>
      <input onChange={e=>handleChange(e.target.value, "tag")} value={tasks.tag} placeholder='add tag'></input>
      <input onClick={e=>handleChange(!e.target.value, "status")} changed={tasks.status} type='checkbox'></input>
      <button onClick={()=>handleTask("todaytask")}>Add task</button>
      <button onClick={()=>handleSignout()}>Sign Out</button>
      <h1>{count.current}</h1>
      <button onClick={()=>{
        count.current = count.current+1
      }}>increase</button>
      <DatePicker />
      <AddTask /> */}
    </div>
  )
}

export default page
