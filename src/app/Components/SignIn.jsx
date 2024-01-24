import React from 'react'
import styles from "./Login.module.css"
const SignIn = ({getback,createuser, fullname,username}) => {
  return (
    <div className={styles.signinbox}>
    <svg className={styles.backbtn} onClick={getback} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
  <path d="M28 32L20 24L28 16" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     <div className={styles.loginicon}>
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11M5 11H19C20.1046 11 21 11.8954 21 13V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V13C3 11.8954 3.89543 11 5 11Z"
            stroke="#7F56D9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h4>Welcome To Task Management</h4>
      <input onChange={fullname} placeholder='Full Name' ></input>
      <input onChange={username} placeholder='Username'></input>
      <button onClick={createuser}>Continue</button>
    </div>
  )
}

export default SignIn
