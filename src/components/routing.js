import React, { useState } from 'react';
import './routing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarker, faCar, faBicycle, faHiking } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import Axios or your preferred HTTP client

function RoutingInput() {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [mode, setMode] = useState('driving'); // Default mode is 'driving'

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  const getRandomCoordinate = () => {
    // Generate random coordinates within a range (adjust as needed)
    const minLat = 28.0;
    const maxLat = 29.0;
    const minLng = 76.0;
    const maxLng = 77.0;

    const randomLat = minLat + Math.random() * (maxLat - minLat);
    const randomLng = minLng + Math.random() * (maxLng - minLng);

    return { lat: randomLat, lng: randomLng };
  };

  const getRoute = () => {
    // Generate random coordinates for location and destination
    const locationCoords = getRandomCoordinate();
    const destinationCoords = getRandomCoordinate();

    // Set the random coordinates in the state
    setLocation(`Lat: ${locationCoords.lat.toFixed(6)}, Lng: ${locationCoords.lng.toFixed(6)}`);
    setDestination(`Lat: ${destinationCoords.lat.toFixed(6)}, Lng: ${destinationCoords.lng.toFixed(6)}`);

    const accessToken = '1b0d6442-4806-4a6c-90bb-5437128096eb'; // Replace with your Galli API access token

    // Make the API request
    axios
      .get(`https://route-init.gallimap.com/api/v1/routing`, {
        params: {
          mode: mode, // Use the selected mode
          srcLat: locationCoords.lat,
          srcLng: locationCoords.lng,
          dstLat: destinationCoords.lat,
          dstLng: destinationCoords.lng,
          accessToken: accessToken,
        },
      })
      .then((response) => {
        // Print the initial result from the API in the console
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div className="routing-input">
      <div className="input-group">
        <label htmlFor="location">
          <FontAwesomeIcon icon={faHome} /> Your Location:
        </label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />
      </div>
      <div className="input-group">
        <label htmlFor="destination">
          <FontAwesomeIcon icon={faMapMarker} /> Your Destination:
        </label>
        <input type="text" id="destination" value={destination} onChange={handleDestinationChange} />
      </div>
      <div className="mode-input-group">
        <label htmlFor="mode">Mode of Travel:</label>
        <select id="mode" value={mode} onChange={handleModeChange}>
          <option value="driving">
            <FontAwesomeIcon icon={faCar} /> Driving
          </option>
          <option value="walking">
            <FontAwesomeIcon icon={faHiking} /> Walking
          </option>
          <option value="cycling">
            <FontAwesomeIcon icon={faBicycle} /> Cycling
          </option>
        </select>
      </div>
      <button className="route-button" onClick={getRoute}>
        Get Route
      </button>
    </div>
  );
}

export default RoutingInput;
