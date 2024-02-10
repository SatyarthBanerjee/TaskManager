"use client"
// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthCheckContext = createContext();

export const CheckProvider = ({ children }) => {
  const [user_1, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [status_1, setstatus] = useState();
  const [sign, setsign] = useState(false)  ;
  const router = useRouter()
    // Check if the user is already authenticated
    const checkAuth = async (det) => {
      try {
        const res = await axios.post("http://localhost:4000/checkuser",det);
        if (res.status === 200) {
          setUser(res.data);
          setstatus(res.status)
        }
      } catch (error) {
        setsign(!sign)
      } finally {
        setLoading(false);
      }
    };
    const signcontextOut = ()=>{
      setUser({});
      setsign(!sign);
      router.push("/")
      
    }


  const contextValue = {
    user_1,
    loading,
    checkAuth,
    status_1,
    sign,
    signcontextOut
  };

  return <AuthCheckContext.Provider value={contextValue}>{children}</AuthCheckContext.Provider>;
};

export const useCheckAuth = () => {
  return useContext(AuthCheckContext);
};
