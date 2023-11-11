// pages/Profile.js
import React, { useState } from 'react';

interface StudentData {
  "STUDENT ID": string;
  // "Student Age": number;
  // "Sex": number;
  // "Graduated high-school type": number;
  // "Scholarship type": number;
  // "Additional work": number;
  // "Regular artistic or sports activity": number;
  // "Do you have a partner": number;
  // "Total salary if available": number;
  // "Transportation to the university": number;
  // "Accommodation type in Cyprus": number;
  // "Mothers education": number;
  // "Fathers education ": number;
  // "Number of sisters/brothers": number;
  // "Parental status": number;
  // "Mothers occupation": number;
  // "Fathers occupation": number;
  // "Weekly study hours": number;
  // "Reading frequency": number;
  // "Attendance to the seminars/conferences related to the department": number;
  // "Impact of your projects/activities on your success": number;
  // "Attendance to classes": number;
  // "Preparation to midterm exams 1": number;
  // "Preparation to midterm exams 2": number;
  // "Taking notes in classes": number;
  // "Listening in classes": number;
  // "Discussion improves my interest and success in the course": number;
  // "Flip-classroom": number;
  // "Cumulative grade point average in the last semester (/4.00)": number;
  // "Expected Cumulative grade point average in the graduation (/4.00)": number;
  // "COURSE ID": number;
  // "GRADE": number;
}

export default function Profile() {
  const [studentId, setStudentId] = useState('');
  const [data, setData] = useState(null);

  

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/../../db.json`); // Adjust the endpoint as needed
      console.log(response.body);
      const jsonData = await response.json();

      if (jsonData) {
        setData(jsonData);
      } else {
        console.error(`Student with ID ${studentId} not found.`);
        setData(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Student ID:
          <input type="text" value={studentId} onChange={handleInputChange} />
        </label>
        <button type="submit">Show Profile</button>
      </form>
      
      {data ? (
        <div>
          <p>Student ID: {data["STUDENT ID"]}</p>
          <p>Student Age: {data["Student Age"]}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No data found for the specified student ID.</p>
      )}
    </div>
  );
}
