// pages/Profile.js
import React, { useState } from 'react';

let i = 0;

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
      const jsonData = await response.json();

      try{
      //  console.log(jsonData[0]["STUDENT ID"]);
        i = 0;
        while (true){
       //   console.log(jsonData[i]["STUDENT ID"]);
          console.log("STUDENT ID:" + studentId);
          console.log(jsonData[i]["STUDENT ID"]);
          if(jsonData[i]["STUDENT ID"] == studentId){
            console.log('TRUE');
            break;
          }
          i++;
        }
      }
      catch(error){
        i = -1;
      }
      console.log(i);
      if (jsonData) 
        setData(jsonData);
      if(i==-1){
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
          <p>Student ID: {data[i]["STUDENT ID"]}</p>
          <p>Student Age: {data[i]["Student Age"]}</p>
          <p>Sex: {data[i]["Sex"]}</p>
          <p>Graduated high-school type: {data[i]["Graduated high-school type"]}</p>
          <p>Scholarship type: {data[i]["Scholarship type"]}</p>
          <p>Additional work: {data[i]["Additional work"]}</p>
          <p>Regular artistic or sports activity: {data[i]["Regular artistic or sports activity"]}</p>
          <p>Do you have a partner: {data[i]["Do you have a partnerx"]}</p>
          <p>Total salary if available: {data[i]["Total salary if available"]}</p>
          <p>Transportation to the university: {data[i]["Transportation to the university"]}</p>
          <p>Accommodation type in Cyprus: {data[i]["Accommodation type in Cyprus"]}</p>
          <p>Mothers education: {data[i]["Mothers education"]}</p>
          <p>Fathers education: {data[i]["Fathers education "]}</p>
          <p>Number of sisters/brothers: {data[i]["Number of sisters/brothers"]}</p>
          <p>Parental status: {data[i]["Parental status"]}</p>
          <p>Mothers occupation: {data[i]["Mothers occupation"]}</p>
          <p>Fathers occupation: {data[i]["Fathers occupation"]}</p>
          <p>Weekly study hours: {data[i]["Weekly study hours"]}</p>
          <p>Reading frequency: {data[i]["Reading frequency"]}</p>
          <p>Attendance to the seminars/conferences related to the department: {data[i]["Attendance to the seminars/conferences related to the department"]}</p>
          <p>Impact of your projects/activities on your success: {data[i]["Impact of your projects/activities on your success"]}</p>
          <p>Attendance to classes: {data[i]["Attendance to classes"]}</p>
          <p>Preparation to midterm exams 1: {data[i]["Preparation to midterm exams 1"]}</p>
          <p>Preparation to midterm exams 2: {data[i]["Preparation to midterm exams 2"]}</p>
          <p>Taking notes in classes: {data[i]["Taking notes in classes"]}</p>
          <p>Listening in classes: {data[i]["Listening in classes"]}</p>
          <p>Discussion improves my interest and success in the course: {data[i]["Discussion improves my interest and success in the course"]}</p>
          <p>Flip-classroom: {data[i]["Flip-classroom"]}</p>
          <p>Cumulative grade point average in the last semester: {data[i]["Cumulative grade point average in the last semester (/4.00"]}</p>
          <p>Expected Cumulative grade point average in the graduation: {data[i]["Expected Cumulative grade point average in the graduation (/4.00)"]}</p>
          <p>COURSE ID: {data[i]["COURSE ID"]}</p>
          <p>GRADE: {data[i]["GRADE"]}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No data found for the specified student ID.</p>
      )}
    </div>
  );
}
