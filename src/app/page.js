import React from 'react'
import styles from './page.module.css'
import Navbar from './Components/Navbar'
import HomeCont from './Components/HomeCont'
const page = () => {
  return (
    <div className={styles.homepage}>
    
      <Navbar />
      <HomeCont/>
    </div>
  )
}

export default page
