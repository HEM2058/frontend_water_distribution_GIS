import React from 'react'; // Make sure to import React if not already imported.
import './App.css';
import Navbar from './components/navbar'; // Assuming 'navbar' is the default export of navbar.js
import Sidebar from './components/sidebar'; // Import the Sidebar component
function App() {
  return (
    <div>
      <Navbar /> {/* Use the imported Navbar component like this */}
      <Sidebar />
    </div>
  );
}

export default App;
