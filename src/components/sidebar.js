import React, { useState } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDatabase, faExclamationCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
      <button className="sidebar-toggler" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={showSidebar ? faChevronLeft : faChevronRight} />
      </button>
      <ul>
        <li className="menu-item">
          <FontAwesomeIcon icon={faHome} /> <span className="menu-text">Dashboard</span>
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faDatabase} /> <span className="menu-text">Database</span>
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon={faExclamationCircle} /> <span className="menu-text">Emergency Response</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
