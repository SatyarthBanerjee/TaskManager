"use client"
import { DatePicker } from 'antd'
import React from 'react'
import "./styles.css"
const Datepicker = () => {
        // Custom date cell renderer
        const dateCellRender = (current) => {
            const isSelected = current.isSame(new Date(), 'day');; // Modify this condition based on your selection logic
          return (
            <div className={`custom-date-cell ${isSelected ? 'selected-date' : ''}`}>
              {current.date()}
            </div>
          );
        };
      
        return (
          <div>
            <DatePicker
              dateRender={dateCellRender} // Use the custom date cell renderer
            />
          </div>
        );
      
}

export default Datepicker
