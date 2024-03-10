import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Button } from "@mui/material";
import DummyPaymentForm from "./DummyPaymentForm";
import "./UpdateGymForm.css";

const PaymentForm = () => {
  const [gymCategory, setGymCategory] = useState("");
  const [packagePrice, setPackagePrice] = useState(0);
  const [showDummyPaymentForm, setShowDummyPaymentForm] = useState(false);

  const [selectedGym, setSelectedGym] = useState(null);

  const handleCardClick = (gym) => {
    setSelectedGym(gym);
  };
  const handleCloseDialog = () => {
    setShowDummyPaymentForm(null);
  };

  const handleCategoryChange = (event) => {
    setGymCategory(event.target.value);
    switch (event.target.value) {
      case "normal":
        setPackagePrice(1000);
        break;
      case "medium":
        setPackagePrice(2500);
        break;
      case "luxury":
        setPackagePrice(4000);
        break;
      default:
        setPackagePrice(0);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the payment process
    console.log("Submitting payment...");
    setShowDummyPaymentForm(true); // Show the dummy payment form after submitting
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="gym-category-label">Select Gym Category</InputLabel>
          <Select
            labelId="gym-category-label"
            id="gym-category-select"
            value={gymCategory}
            onChange={handleCategoryChange}
            fullWidth
          >
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="luxury">Luxury</MenuItem>
          </Select>
        </FormControl>
        <div>
          <p>Selected Package: {gymCategory}</p>
          <p>Package Price: ${packagePrice} per month</p>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!gymCategory || packagePrice === 0}
          fullWidth
        >
          Pay Now
        </Button>
      </form>

      {showDummyPaymentForm && (
        <div className="dialog-overlay">
        <div className="dialog">
          <button className="close-btn" onClick={handleCloseDialog}>
            X
          </button>
          <DummyPaymentForm gym={selectedGym} />
        </div>
      </div>
      )}
    </div>
  );
};

export default PaymentForm;
