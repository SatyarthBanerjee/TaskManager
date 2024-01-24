"use client"
import React from "react";
import styles from "./Login.module.css";
import { signIn, useSession } from "next-auth/react";
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginbtn from "./Buttons/GoogleLoginbtn";
import Image from "next/image";
const LoginBox = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className={styles.loginbox}>
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
      <h6>Welcome To Task Management</h6>
      <p>Login or Signup</p>
      <div className={styles.loginform}>
        <input placeholder="Email or Username"></input>
        <input placeholder="Password"></input>
        <button>Continue</button>
      </div>
      <p>or</p>
      {/* <button onClick={()=>signIn("google")}>Login With Google</button> */}
      <GoogleLoginbtn onclick ={()=>signIn("google")}/>
      <p>{session.data?.user?.email}</p>
      {/* <Image width={10} height={10} src={session.data?.user?.image} /> */}
      {/* <img src={session.data?.user?.image}></img> */}
    </div>
  );
};

export default LoginBox;
