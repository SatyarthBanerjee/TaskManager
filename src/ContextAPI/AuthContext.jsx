// AuthContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const AuthorProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setstatus ] = useState()
  const signinkr = async (userData) => {
    try {
      const res = await axios.post("http://localhost:4000/createuser", userData);
      if (res.status === 201) {
        setUser(res.data); 
        alert("User created")
        setstatus(res.status)// Assuming your response contains user data
      } else if (res.status === 200) {
        alert("User already exists");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signoutkr = () => {
    // Implement sign out logic if needed
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ status, user, signinkr, signoutkr }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
