// "use client"
import React from "react";
// import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./dashboard.module.css"
export default function RootLayout({ children }) {
    // const [opa, setOpa] = useState(false)
 return(
    <div className={styles.rootdash}> 
        <Navbar />
        {children}
    </div>
 )
}