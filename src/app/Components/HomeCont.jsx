"use client";
import React, { useEffect } from "react";
import styles from "./Homecont.module.css";
import { useState } from "react";
const HomeCont = () => {
  const [check, setCheck] = useState(false);
  const [task, setTask] = useState(false);
  const currentDate = new Date();
  const [todaydet, settodaydet] = useState({
    task: "",
    tag: "",
    status: false,
    date: currentDate
  });
  const [details, setDetails] = useState([]);
  const handleCheck = (id) => {
    setDetails((prevDetails) => {
      const updatedDetails = prevDetails.map((item, index) => {
        if (index === id) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      return updatedDetails;
    });
  };
  const handletask = () => {
    setTask(!task);
  };
  const handleChange = (value, name) => {
    settodaydet((prevDet) => {
      return { ...prevDet, [name]: value };
    });
    console.log(todaydet);
  };
  const handleUpdate = () => {
    setDetails((prevDetails) => [...prevDetails, todaydet]);
  };
  const [addtag, setaddtag] = useState(false);
  const handleaddtag = () => {
    setaddtag(!addtag);
  };
  useEffect(() => {
    settodaydet({
      task:"",
      tag:"",
      status:false

    })
    console.log(details);
  }, [details]);
  const handleKeyPress = (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
      // Handle your logic here when Enter is pressed
      handleUpdate()
    }
  };
  return (
    <div className={styles.homecont} onKeyPress={handleKeyPress}
    tabIndex="0" >
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
          {details.map((item, id) => {
            return (
              <div key={id} className={styles.todaycont}>
                <div className={styles.check}>
                  <div
                    onClick={() => handleCheck(id)}
                    className={styles.checkbox}
                    style={{
                      backgroundColor: item.status === true ? "#FF3C58" : "",
                    }}
                  ></div>
                </div>

                <div className={styles.details}>
                  <p>{item.task}</p>
                  <div className={styles.tags}>
                    <div className={styles.circle}></div>
                    <p>{item.tag}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className={styles.todaycont}></div>
          <div className={styles.todaycont}></div> */}
          {task && (
            <div className={styles.inputtask}>
              <div className={styles.inputtask_cont}>
                <div className={styles.dottedcircle}></div>
                <input
                  value={todaydet.task}
                  onChange={(e) => handleChange(e.target.value, "task")}
                  placeholder="Add Task"
                ></input>
              </div>
              <div className={styles.mytags}>
              <div onClick={handleaddtag} className={styles.tags}>
                <div className={styles.circle}></div>
                <p>Add tag</p>
              </div>
              {addtag && (
                <>
                  <button
                    className={styles.tags}
                    value="Personal"
                    onClick={(e) => handleChange(e.target.value, "tag")}
                  >
                    Personal
                  </button>
                  <button
                    value="Work"
                    className={styles.tags}
                    onClick={(e) => handleChange(e.target.value, "tag")}
                  >
                    Work
                  </button>
                  <button
                    className={styles.tags}
                    value="Academic"
                    onClick={(e) => handleChange(e.target.value, "tag")}
                  >
                  Academic
                  </button>
                </>
              )}
              </div>
             

              {/* <button onClick={handleUpdate}>Update</button> */}
            </div>
          )}
          <button className={styles.todayadd} onClick={handletask}>
            + Add Task
          </button>
        </div>
        <div className={styles.tomorrow}></div>
        <div className={styles.upcoming}></div>
      </div>
    </div>
  );
};

export default HomeCont;
