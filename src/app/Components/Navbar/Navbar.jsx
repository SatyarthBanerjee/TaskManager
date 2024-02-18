"use client";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import image from "./Avatar.jpg";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";
const Navbar = () => {
  const session = useSession();
  const router = useRouter()
  useEffect(()=>{
    if(session?.status==="unauthenticated"){
      router.push("/");
    }
  },[session?.status])
 
  return (
    <div className={styles.navbar}>
      <div className={styles.profinfo}>
        <Image src={session.data?.user?.image || ""} width={30} height={30} />
        <div className={styles.nameemail}>
          <p>{session.data?.user?.name || ""}</p>
          <p>{session.data?.user?.email || ""}</p>
        </div>
      </div>
      <div className={styles.menuitems}>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#101828"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Home
          </li>
          {/* <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.25016 6.25001H6.2585M17.5752 11.5917L11.6002 17.5667C11.4454 17.7216 11.2616 17.8446 11.0592 17.9284C10.8569 18.0123 10.64 18.0555 10.421 18.0555C10.202 18.0555 9.98509 18.0123 9.78276 17.9284C9.58043 17.8446 9.39662 17.7216 9.24183 17.5667L2.0835 10.4167V2.08334H10.4168L17.5752 9.24168C17.8856 9.55395 18.0598 9.97637 18.0598 10.4167C18.0598 10.857 17.8856 11.2794 17.5752 11.5917Z"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Today
          </li> */}
          {/* <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_231_36)">
                <path
                  d="M9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10C18.3332 5.39763 14.6022 1.66667 9.99984 1.66667C5.39746 1.66667 1.6665 5.39763 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99984 15C12.7613 15 14.9998 12.7614 14.9998 10C14.9998 7.23858 12.7613 5.00001 9.99984 5.00001C7.23841 5.00001 4.99984 7.23858 4.99984 10C4.99984 12.7614 7.23841 15 9.99984 15Z"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99984 11.6667C10.9203 11.6667 11.6665 10.9205 11.6665 10C11.6665 9.07953 10.9203 8.33334 9.99984 8.33334C9.07936 8.33334 8.33317 9.07953 8.33317 10C8.33317 10.9205 9.07936 11.6667 9.99984 11.6667Z"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_231_36">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Tomorrow
          </li>*/}
          <li> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_231_253)">
                <path
                  d="M18.3332 9.23333V10C18.3321 11.797 17.7503 13.5456 16.6743 14.9849C15.5983 16.4241 14.0859 17.4771 12.3626 17.9866C10.6394 18.4961 8.79755 18.4349 7.1119 17.8122C5.42624 17.1894 3.98705 16.0384 3.00897 14.5309C2.03089 13.0234 1.56633 11.2401 1.68457 9.44693C1.80281 7.6538 2.49751 5.94694 3.66507 4.58089C4.83263 3.21485 6.41049 2.26282 8.16333 1.86679C9.91617 1.47076 11.7501 1.65195 13.3915 2.38333M18.3332 3.33333L9.99984 11.675L7.49984 9.175"
                  stroke="#344054"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_231_253">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Completed
          </li>
          <li onClick={()=>{
            // router.push("/")
            signOut("google");
            

          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.2998 5.53334C16.3484 6.58233 17.0625 7.91871 17.3517 9.3735C17.6409 10.8283 17.4922 12.3362 16.9245 13.7065C16.3567 15.0768 15.3954 16.248 14.1621 17.072C12.9288 17.896 11.4789 18.3358 9.99561 18.3358C8.51235 18.3358 7.0624 17.896 5.82909 17.072C4.59577 16.248 3.63448 15.0768 3.06675 13.7065C2.49902 12.3362 2.35035 10.8283 2.63954 9.3735C2.92873 7.91871 3.64279 6.58233 4.69144 5.53334M9.99978 1.66667V10"
                stroke="#B42318"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Log Off
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
