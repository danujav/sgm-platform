import { React, useState } from "react";
import "./DummyPaymentForm.css";

const DummyPaymentForm = () => {
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dummy Payment Form Submitted");
  };
  const handleMonthChange = (event) => {
    event.preventDefault();
    
    const formData = {
      cardHolderName: 'John Doe', // Replace with the actual form data
      cardNumber: '1234 5678 9012 3456',
      expiryMonth: '12', // Example month
      expiryYear: '2025', // Example year
      cvv: '123' // Example CVV
    };
  
    fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  const handleYearChange = (event) => {
    setExpiryYear(event.target.value);
  };
  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const monthNumber = index + 1;
    return (
      <option key={monthNumber} value={monthNumber}>
        {monthNumber}
      </option>
    );
  });

  // Generate year options (from current year to next 10 years)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, index) => {
    const year = currentYear + index;
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <div className="form-container">
      <h2>Dummy Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-holder-name">Cardholder Name</label>
          <input
            type="text"
            id="card-holder-name"
            // required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            // required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiry-month">Expiry Month</label>
          <select
            id="expiry-month"
            value={expiryMonth}
            onChange={handleMonthChange}
            className="form-control"
            // required
          >
            <option value="">Select Month</option>
            {monthOptions}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="expiry-year">Expiry Year</label>
          <select
            id="expiry-year"
            value={expiryYear}
            onChange={handleYearChange}
            className="form-control"
            // required
          >
            <option value="">Select Year</option>
            {yearOptions}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" 
          // required 
          className="form-control" />
        </div>
        <button type="submit" className="btn-submit">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default DummyPaymentForm;
