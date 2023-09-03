import React from 'react';
import './navbar.css';
import logo_pmc from '../images/logo_pmc.png';

function Navbar() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-container">
          <div className="logo-pmc"></div> {/* Use a div to display the logo */}
        </div>
        <h1>GIS Based Water Network Management System</h1>
      </div>
      <div className="right-section">
        <button>Login / Logout</button>
      </div>
    </header>
  );
}

export default Navbar;
