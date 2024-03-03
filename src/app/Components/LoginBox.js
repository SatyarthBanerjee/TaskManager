"use client"
import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { signIn, useSession } from "next-auth/react";
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginbtn from "./Buttons/GoogleLoginbtn";
import Image from "next/image";
import SignIn from "./SignIn";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/ContextAPI/AuthContext";
import { useCheckAuth } from "@/ContextAPI/CheckSetContext";
import Loader from "./Loading/Loader";
import { jwtDecode } from "jwt-decode";

const LoginBox = () => {
  const session = useSession();
  const { status, user, signinkr, signoutkr } = useAuth()
  const {status_1, checkAuth, sign} = useCheckAuth();
  // console.log(session);
  const [signin, setsignin] = useState(false);
  const [userdet, setUserDet] = useState({
    username_or_email:"",
    password:"",
    fullname:""
  });
  const [authorized, setAuthrorized] = useState(false);
  const router =useRouter()
  const handleChange= (value, name)=>{
    setUserDet((prevData)=>{
      return{...prevData,[name]: value}
    })
  }
  // useEffect(() => {
  //   if (status_1 === 200|| session?.status==="authenticated") {
  //     router.push("/dashboard");
  //   }
  // }, [status_1, router]);
  
  
  const handleCheckandset = async (e)=>{
    e.preventDefault();
    try{
     await checkAuth(userdet);
     console.log(status_1);
    //  if(status_1===200){
    //   setAuthrorized(true);
    //   if(authorized===true){
    //     router.push("/dashboard")
    //   }
      
    //  }
    //  else{
    //   setsignin(sign)
    //  }
        
      
     
    }
    catch(error){
      alert(error)
      
    }
    
   
    
  }

  useEffect(() => {
    const redirectUser =  () => {
      if (status_1 === 200) {
         router.push("/dashboard"); 
      } 
      else if (session.status === "authenticated") {
         router.push("/dashboard");
      } 
      else {
        setsignin(sign);
      }
    };
  
    redirectUser(); // Call the function immediately inside useEffect
  
    // Add session.status, status_1, and router to dependencies
  }, [session.status, status_1, router]);
  
  const handleSignIn =async()=>{
     try{
      await signinkr(userdet)
      if(status===200){
        setsignin(!signin)
      }
     }
     catch(error){
      console.log(error);
     }
    
    
    
   
  }
  const handleGoogleSignIn = async () => {
    try {
      const response = await signIn("google");
      const token = response?.access_token;
  
      if (token) {
        const decodedToken = jwt_decode(token);
        // Now you can access user information from the decoded token
        console.log(decodedToken);
        // Perform any additional actions here, such as setting user information in state
      } else {
        // Handle the case where the token is not available
        console.error("Google sign-in failed: Token not found");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  if(session.status==="loading"){
    return(
      <Loader />
    )
  }

  
  return (
    <>
    {signin?<SignIn getback={()=>{setsignin(!signin)}} createuser={handleSignIn} username={(e)=>handleChange(e.target.value ,"username_or_email")} fullname={(e)=>handleChange(e.target.value ,"fullname")} />:<div className={styles.loginbox}>
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
        <input onChange={(e)=>handleChange(e.target.value ,"username_or_email")} value={userdet.username_or_email} type="text" placeholder="Email or Username"></input>
        <input onChange={(e)=>handleChange(e.target.value,"password")} value={userdet.password} type="password" placeholder="Password"></input>
        <button name="continue1" onClick={(e)=>handleCheckandset(e)}>Continue</button>
      </div>
      <p>or</p>
      {/* <button onClick={()=>signIn("google")}>Login With Google</button> */}
      <GoogleLoginbtn onclick ={handleGoogleSignIn}/>
      <p>{session.data?.user?.email}</p>
      {/* <Image width={10} height={10} src={session.data?.user?.image} /> */}
      {/* <img src={session.data?.user?.image}></img> */}
    </div>}
    </>
  );
};

export default LoginBox;
