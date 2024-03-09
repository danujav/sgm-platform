import React, { useState } from 'react';

function GymDetailsForm({ gym }) {
  const [gymDetails, setGymDetails] = useState({
    id: gym.id,
    gym_name: gym.gym_name,
    gym_location: gym.gym_location,
    gym_category: gym.gym_category
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGymDetails({ ...gymDetails, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('http://localhost:3001/update-gym', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gymDetails), // Send the updated gym details in the request body
      });
      if (response.ok) {
        console.log('Gym details updated successfully!');
        
      } else {
        console.error('Failed to update gym details.');
      }
    } catch (error) {
      console.error('Error updating gym details:', error);
    }
  };

  return (
    <div className="gym-details-form">
      <h2>Gym Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="gymName">Gym Name:</label>
          <input
            type="text"
            id="gymName"
            name="gym_name"
            value={gymDetails.gym_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gymLocation">Gym Location:</label>
          <input
            type="text"
            id="gymLocation"
            name="gym_location"
            value={gymDetails.gym_location}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gymCategory">Gym Category:</label>
          <input
            type="text"
            id="gymCategory"
            name="gym_category"
            value={gymDetails.gym_category}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other fields as needed */}
        <button type="button" onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default GymDetailsForm;
