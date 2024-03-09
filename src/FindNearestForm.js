import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

function FindNearestForm() {
  const [textInput, setTextInput] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    // Get current location when the component mounts
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocation(latitude, longitude);
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  }, []);

  const fetchLocation = (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCurrentLocation(data.display_name);
        setTextInput(data.display_name); // Set the text input value to current location
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
      });
  };

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocation(latitude, longitude);
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <h2>Find Nearest Area</h2>
      <div>
        <TextField
          id="search"
          label="Search nearest area"
          value={textInput}
          onChange={handleChange}
          fullWidth
        />
        <button onClick={handleUseCurrentLocation}>Use Current Location</button>
        <div>
          <p>Current Location: {currentLocation}</p>
        </div>
      </div>
    </div>
  );
}

export default FindNearestForm;
