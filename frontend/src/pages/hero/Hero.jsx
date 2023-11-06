import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleUserLogin = () => {
    navigate('/Userlogin');
  };

  const handleDriverLogin = () => {
    navigate('/Driverlogin');
  };

  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>Order Tension free</h1>
        <p>Your trusted order-delivering service.</p>
        <div>
          {user && (
            <button className="order-now-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
          {!user && (
            <>
              <button className="order-now-btn" onClick={handleUserLogin}>
                User Login
              </button>
              <button className="order-now-btn" onClick={handleDriverLogin}>
                Driver Login
              </button>
            </>
          )}
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://eathub.live/static/assets/images/deliverybike-914x596.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
