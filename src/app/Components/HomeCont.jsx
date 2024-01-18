"use client";
import React, { useEffect } from "react";
import styles from "./Homecont.module.css";
import { useState } from "react";
const HomeCont = () => {
  const [check, setCheck] = useState(false);
  const [task, setTask] = useState(false);
  const [tomtask, settomTask] = useState(false);
  const currentDate = new Date();
  const [todaydet, settodaydet] = useState({
    task: "",
    tag: "",
    status: false,
    date: currentDate,
  });
  const [tomorrowdet, settomorrowdet] = useState({
    task: "",
    tag: "",
    status: false,
    date: currentDate+1,
  });
  const [details, setDetails] = useState([]);
  const [tomorrowdetails, setTomorrowDetails] = useState([]);
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
  const handletask = (value) => {
    if(value==="today"){
      setTask(!task);
    }
    else if(value==="tomorrow"){
      settomTask(!tomtask)
    }
    
  };
  const handleChange = (value, name, when) => {
    if(when==="today"){
      settodaydet((prevDet) => {
        return { ...prevDet, [name]: value };
      });
    }
    else if(when==="tomorrow"){
      settomorrowdet((prevDet)=>{
        return{ ...prevDet,[name]:value}
      })
    }
  
    console.log(todaydet);
  };
  const handleUpdate = () => {
    if(task){
      setDetails((prevDetails) => [...prevDetails, todaydet]);

    }
    else if(tomtask){
      setTomorrowDetails((prevData)=>[...prevData,tomorrowdet]);
    }
    settodaydet({
      task: "",
      tag: "",
      status: false,
    });
    settomorrowdet({
      task: "",
      tag: "",
      status: false,
    });
    
  };
  const [addtag, setaddtag] = useState(false);
  const handleaddtag = () => {
    setaddtag(!addtag);
  };
  useEffect(() => {
    console.log(details);
    console.log(tomorrowdetails);
  }, [details]);
  const handleKeyPress = (event) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === "Enter") {
      // Handle your logic here when Enter is pressed
      handleUpdate();
    }
  };
  return (
    <div className={styles.homecont} onKeyPress={handleKeyPress} tabIndex="0">
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
                  onChange={(e) => handleChange(e.target.value, "task", "today")}
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
                      onClick={(e) => handleChange(e.target.value, "tag","today")}
                    >
                      Personal
                    </button>
                    <button
                      value="Work"
                      className={styles.tags}
                      onClick={(e) => handleChange(e.target.value, "tag","today")}
                    >
                      Work
                    </button>
                    <button
                      className={styles.tags}
                      value="Academic"
                      onClick={(e) => handleChange(e.target.value, "tag","today")}
                    >
                      Academic
                    </button>
                  </>
                )}
              </div>

              {/* <button onClick={handleUpdate}>Update</button> */}
            </div>
          )}
          <button className={styles.todayadd} onClick={()=>handletask("today")}>
            + Add Task
          </button>
        </div>
        <div className={styles.tomorrow}>
        {tomorrowdetails.map((data, id)=>{
          return(
            <div key={id} className={styles.tomorrowcont}>
              {/* <div className={styles.check}>
                <div
                  onClick={() => handleCheck(id)}
                  className={styles.checkboxtomorrow}
                  style={{
                    backgroundColor: true ? "#5F7BD6" : "",
                  }}
                ></div>
              </div> */}

              <div className={styles.details}>
                <p>{data.task}</p>
                <div className={styles.tagstomorrow}>
                  <div className={styles.circletomorrow}></div>
                  <p>{data.tag}</p>
                </div>
              </div>
            
          </div>
          )
        })}
          
          {tomtask && (
            <div className={styles.inputtasktomorrow}>
              <div className={styles.inputtasktomorrow_cont}>
                <div className={styles.dottedcircletomorrow}></div>
                <input
                  value={tomorrowdet.task}
                  onChange={(e) => handleChange(e.target.value, "task", "tomorrow")}
                  placeholder="Add Task"
                ></input>
              </div>
              <div className={styles.mytags}>
                <div onClick={handleaddtag} className={styles.tagstomorrow}>
                  <div className={styles.circletomorrow}></div>
                  <p>Add tag</p>
                </div>
                {addtag && (
                  <>
                    <button
                      className={styles.tagstomorrow}
                      value="Personal"
                      onClick={(e) => handleChange(e.target.value, "tag","tomorrow")}
                    >
                      Personal
                    </button>
                    <button
                      value="Work"
                      className={styles.tagstomorrow}
                      onClick={(e) => handleChange(e.target.value, "tag","tomorrow")}
                    >
                      Work
                    </button>
                    <button
                      className={styles.tagstomorrow}
                      value="Academic"
                      onClick={(e) => handleChange(e.target.value, "tag","tomorrow")}
                    >
                      Academic
                    </button>
                  </>
                )}
              </div>

              {/* <button onClick={handleUpdate}>Update</button> */}
            </div>
          )}
          <button className={styles.tomorrowadd} onClick={()=>handletask("tomorrow")}>
            + Add Task
          </button>
        </div>
        <div className={styles.upcoming}></div>
      </div>
    </div>
  );
};

export default HomeCont;
