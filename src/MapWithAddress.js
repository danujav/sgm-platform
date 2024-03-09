import React, { useState } from 'react';
import './MapWithAddress.css';

function MapWithAddress() {
  const [address, setAddress] = useState('');
  const [mapAddress, setMapAddress] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async (event) => {
    const inputAddress = event.target.value;
    setAddress(inputAddress);
    if (inputAddress !== '') {
      // Fetch address from Nominatim API
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${inputAddress}&format=json&addressdetails=1`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error('Failed to fetch address');
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching address:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectAddress = (selectedAddress) => {
    setAddress(selectedAddress);
    setMapAddress(selectedAddress);
    setSearchResults([]);
  };

  return (
    <div className="map-with-address-container">
      <h2>Map with Address</h2>
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
      </div>
      <div className="map-container">
        <p className="map-address">Map Address: {mapAddress}</p>
      </div>
    </div>
  );
}

export default MapWithAddress;
