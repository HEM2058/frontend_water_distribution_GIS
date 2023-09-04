// App.js
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import OpenLayersMap from './components/map'; // Import the OpenLayersMap component

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <OpenLayersMap /> {/* Include the OpenLayersMap component */}
   
      </div>
    </div>
  );
}

export default App;
