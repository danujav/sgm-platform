import React, { useState } from "react";
import "./MapWithAddress.css";
import MapView from "./MapView";
import './MapView.css';

function MapWithAddress() {
  const [address, setAddress] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = async (event) => {
    const inputAddress = event.target.value;
    setAddress(inputAddress);
    if (inputAddress.trim() !== "") {
      // Fetch address from Nominatim API
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            inputAddress
          )}&format=json&addressdetails=1`
        );
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
          setError(null); // Reset error state
        } else {
          setError("Failed to fetch address");
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        setError("Error fetching address");
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
    setSearchResults([]);
  };

  return (
    <div className="map-with-address-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Type an address"
          value={address}
          onChange={handleInputChange}
        />
        <div className="address-options">
          {searchResults.map((result) => (
            <div
              key={result.place_id}
              className="address-option"
              onClick={() => handleSelectAddress(result.display_name)}
            >
              {result.display_name}
            </div>
          ))}
        </div>
        {error && <p className="error-message">{error}</p>}
        {/* <MapView address={address} /> */}
      </div>
      
    </div>
  );
}

export default MapWithAddress;
