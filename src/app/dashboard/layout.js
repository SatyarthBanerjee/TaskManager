import Navbar from "../Components/Navbar/Navbar";
import styles from "./dashboard.module.css"
export default function RootLayout({ children }) {
 return(
    <div className={styles.rootdash}>
        <Navbar />
        {children}
    </div>
 )
}