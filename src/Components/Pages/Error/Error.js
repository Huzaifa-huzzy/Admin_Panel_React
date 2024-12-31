import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'; // CSS file for styling
import Sidebar from '../Sidebar/Sidebar';

const Error = () => {
  return (
    <div className="error-page">
      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Error content */}
      <div className="error-container">
        <div className="error-content">
          <div className="error-image">
            <img src="https://via.placeholder.com/150" alt="404" />
          </div>
          <div className="error-text">
            <h1>Oops! Something Went Wrong...</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <div className="error-buttons">
              <Link to="/dashboard" className="btn-home">
                Go Back Home
              </Link>
              <Link to="" className="btn-contact">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
