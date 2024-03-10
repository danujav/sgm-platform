import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./UpdateGymForm.css";
import PaymentForm from "./PaymentForm";

function FindNearestForm() {
  const [textInput, setTextInput] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [gyms, setGyms] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Get current location when the component mounts
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocation(latitude, longitude);
        fetchGyms();
      },
      (error) => {
        console.error("Error getting current location:", error);
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
        console.error("Error fetching location:", error);
      });
  };

  const fetchGyms = async () => {
    try {
      const response = await fetch(`http://localhost:3001/gyms`);
      if (response.ok) {
        const data = await response.json();
        setGyms(data);
        setSearchResults(data); // Initialize search results with all gyms
      } else {
        console.error("Failed to fetch gyms data");
      }
    } catch (error) {
      console.error("Error fetching gyms:", error);
    }
  };

  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchLocation(latitude, longitude);
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );
  };

  const handleChange = (event) => {
    const searchText = event.target.value;
    setTextInput(searchText);
    // Filter gyms based on the entered location text
    const filteredGyms = gyms.filter((gym) =>
      gym.gym_location.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredGyms);
  };

  const [selectedGym, setSelectedGym] = useState(null);

  const handleCardClick = (gym) => {
    setSelectedGym(gym);
  };
  const handleCloseDialog = () => {
    setSelectedGym(null);
  };


  return (
    <div>
      <h2>Find Nearest Area</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="search"
          label="Search nearest area"
          value={textInput}
          onChange={handleChange}
          fullWidth
          sx={{ "& .MuiInputBase-input": { height: "60px" } }} 
        />
        <button
          onClick={handleUseCurrentLocation}
          style={{ marginLeft: "10px", width: "200px", height: "60px" }} // Adjust width as needed
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {searchResults.map((gym) => (
          <div
            key={gym.id}
            className="card"
            onClick={() => handleCardClick(gym)}
          >
            <h3>{gym.gym_name}</h3>
            <img src={gym.gym_photo_url} alt={gym.gym_name} />
            <div className="card-content">
              <p>Location: {gym.gym_location}</p>
              <p>Category: {gym.gym_category}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedGym && (
        <div className="dialog-overlay">
          <div className="dialog">
            <button className="close-btn" onClick={handleCloseDialog}>
              X
            </button>
            <PaymentForm gym={selectedGym} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FindNearestForm;
