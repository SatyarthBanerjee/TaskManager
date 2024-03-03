import React from 'react'
import styles from "./mystatus.module.css"
const Mystatus1 = () => {
  return (
    <div className={styles.mystatus1}>
    <div className={styles.circle1}></div>
      <p>Done</p>
    </div>
  )
}
const Mystatus2 = () => {
  return (
    <div className={styles.mystatus2}>
      <div className={styles.circle2}></div>
      <p>Not Started</p>
    </div>
  )
}
const Mystatus3 = () => {
  return (
    <div className={styles.mystatus3}>
      <div className={styles.circle3}></div>
      <p>In Progress</p>
    </div>
  )
}

export {Mystatus1, Mystatus2, Mystatus3}
