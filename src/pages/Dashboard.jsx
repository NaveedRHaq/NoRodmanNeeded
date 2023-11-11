// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/predict">Predict</Link>
          </li>
          <li>
            <Link to="/create">Chi Squared</Link> 
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      {/* Your Dashboard component content */}
    </div>
  );
};

export default Dashboard;
