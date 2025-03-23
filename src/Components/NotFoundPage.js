import React from 'react';
// import notfound  from '../assets/404.jpg';
import { useNavigate } from 'react-router-dom'; // If you're using react-router for navigation
import './NotFoundPage.css'; // Import the CSS file
const NotFoundPage = () => {
  const navigate = useNavigate(); // For navigating back to the home page or any other page

  const handleGoHome = () => {
    navigate('/'); // Redirect to home or a specific page
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for does not exist.</p>
        <button className="notfound-button" onClick={handleGoHome}>Go to Home</button>
      </div>
      {/* <div className="notfound-image-container">
        <img
          src={notfound} // Add an image here (e.g., an illustration or icon for 404)
          alt="404 Not Found"
          className="notfound-image"
        />
      </div> */}
    </div>
  );
};

export default NotFoundPage;
