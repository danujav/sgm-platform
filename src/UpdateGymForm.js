import React, { useState, useEffect } from "react";
import "./UpdateGymForm.css";
import GymDetailsForm from "./GymDetailsForm";

function GymUpdateForm() {
  const [gyms, setGyms] = useState([]);
  const [userId, setUserId] = useState(0);

  const [selectedGym, setSelectedGym] = useState(null);

  const handleCardClick = (gym) => {
    setSelectedGym(gym);
  };
  const handleCloseDialog = () => {
    setSelectedGym(null);
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);

    const fetchGyms = async () => {
      try {
        const response = await fetch(`http://localhost:3001/gyms?userId=${id}`);
        if (response.ok) {
          const data = await response.json();
          setGyms(data);
          console.log(data, "data");
        } else {
          console.error("Failed to fetch gyms data");
        }
      } catch (error) {
        console.error("Error fetching gyms:", error);
      }
    };

    if (id) {
      fetchGyms();
    }
  }, []);

  return (
    <div>
      <h2>Gym Update Form</h2>
      <div className="card-container">
        {gyms.map((gym) => (
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
            <GymDetailsForm gym={selectedGym} />
          </div>
        </div>
      )}
    </div>
  );
}

export default GymUpdateForm;
