// DataContext.js
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create the context
const DataContext = createContext();

// Create a custom hook to use the context
export const useDataContext = () => useContext(DataContext);

// Create the context provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch all data
  const getAllData = async (email) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/', { email });
      console.log("response", response);
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  const addNewData = async (newData) => {
    try {
      setLoading(true);
      const res  = await axios.post('http://localhost:4000/creategoogledata', newData);
      if(res.status===201){
        alert("Task added")
      }
      setLoading(false);
      // After adding new data, fetch all data again to update the list
      getAllData(newData.email);
    } catch (error) {
      console.error('Error adding new data:', error);
      setLoading(false);
    }
  };
  // useEffect(()=>{
    
  // },[response])

  // Value object to provide data and functions to consumers
  const value = {
    data,
    loading,
    getAllData,
    addNewData
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
