import React, { useState, useEffect } from 'react';
import './AddGymForm.css';
import MapWithAddress from '../src/MapWithAddress';

function AddGymForm() {
  const [gymCategory, setGymCategory] = useState('normal');
  const [gymLocation, setGymLocation] = useState('');
  const [gymName, setGymName] = useState('');
  const [gymPhotoUrl, setGymPhoto] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => { 
    const role = localStorage.getItem('role');

    const fetchUserId = async () => {
      try {
        const response = await fetch(`http://localhost:3001/user-id?role=${role}`);
        if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
        } else {
          console.error('Failed to fetch user ID');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (role) {
      fetchUserId();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const gymData = {
      userId,
      gymCategory,
      gymLocation,
      gymName,
      gymPhotoUrl
    };

    try {
      const response = await fetch('http://localhost:3001/add-gym', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gymData),
      });

      if (response.ok) {
        alert('Gym added successfully!');
        setGymCategory('normal');
        setGymLocation('');
        setGymName('');
        setGymPhoto(null);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the gym. Please try again later.');
    }
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const photosArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        photosArray.push(reader.result);
        if (photosArray.length === files.length) {
          setGymPhoto(photosArray);
        }
      };
      reader.onerror = (error) => {
        console.error('Error: ', error);
      };
    }
  };

  const handleUseCurrentAddress = () => {
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

  const fetchLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      if (response.ok) {
        const data = await response.json();
        setGymLocation(data.display_name);
      } else {
        console.error('Failed to fetch location');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Gym Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="gymCategory">Gym Category:</label>
          <select
            id="gymCategory"
            value={gymCategory}
            onChange={(e) => setGymCategory(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="average">Average</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gymLocation">Gym Location:</label>
          <div className="input-with-button">
            <input
              type="text"
              id="gymLocation"
              value={gymLocation}
              onChange={(e) => setGymLocation(e.target.value)}
              placeholder="Search location"
            />
            <button type="button" className="current-location-button" onClick={handleUseCurrentAddress}>use my current location📍</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gymPhoto">Gym Photo:</label>
          <input
            type="file"
            id="gymPhoto"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gymName">Gym Name:</label>
          <input
            type="text"
            id="gymName"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
            placeholder="Enter gym name"
          />
        </div>
        <MapWithAddress />
        <button type="submit">Add Gym</button>
      </form>
    </div>
  );
}

export default AddGymForm;
