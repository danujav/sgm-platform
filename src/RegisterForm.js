import React, { useState } from "react";
import "./RegisterForm.css"; // Import the CSS file for styling

function RegisterForm() {
  const [userType, setUserType] = useState("owner"); // Default to gym owner type
  const [nicNumber, setNicNumber] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [gymLocation, setGymLocation] = useState("");
  const [gymPhotos, setGymPhotos] = useState([]);
  const [gymCategory, setGymCategory] = useState("normal");

  // Function to handle file upload and convert to base64
  const handleFileUpload = (e) => {
    const files = e.target.files;
    const photosArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        photosArray.push(reader.result);
        if (photosArray.length === files.length) {
          setGymPhotos(photosArray);
        }
      };
      reader.onerror = (error) => {
        console.error("Error: ", error);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(userType==='member') {
      setGymPhotos('');
    }
    const userData = {
      userType,
      username,
      firstName,
      secondName,
      lastName,
      telephone,
      email,
      nicNumber,
      gymCategory,
      gymLocation,
      gymPhotos,
    };

    console.log(userData);

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setUserType('owner');
          setNicNumber('');
          setUsername('');
          setFirstName('');
          setSecondName('');
          setLastName('');
          setTelephone('');
          setEmail('');
          setGymLocation('');
          setGymPhotos([]);
          setGymCategory('normal');
          
      } else {
        // Handle error, maybe show a message to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Registration Form</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="userType">Register as:</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="owner">Gym Owner</option>
            <option value="member">Gym Member</option>
          </select>
        </div>
        {userType === "owner" && (
          <>
            <div className="form-group">
              <label htmlFor="nicNumber">NIC Number:</label>
              <input
                type="text"
                id="nicNumber"
                value={nicNumber}
                onChange={(e) => setNicNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="secondName">Second Name:</label>
              <input
                type="text"
                id="secondName"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone:</label>
              <input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gymLocation">Gym Location:</label>
              <input
                type="text"
                id="gymLocation"
                value={gymLocation}
                onChange={(e) => setGymLocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gymPhotos">Gym Photos:</label>
              <input
                type="file"
                id="gymPhotos"
                multiple
                onChange={handleFileUpload}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gymCategory">Gym Category:</label>
              <select
                id="gymCategory"
                value={gymCategory}
                onChange={(e) => setGymCategory(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="medium">Medium</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        )}
        {userType === "member" && (
          <>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name:</label>
              <input
                type="text"
                id="seconName"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone:</label>
              <input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        )}
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;

// import React, { useState } from 'react';
// import './RegisterForm.css'; // Import the CSS file for styling

// function RegisterForm() {
//   const [userType, setUserType] = useState('owner'); // Default to gym owner type
//   const [nicNumber, setNicNumber] = useState('');
//   const [username, setUsername] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [secondName, setSecondName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [email, setEmail] = useState('');
//   const [gymLocation, setGymLocation] = useState('');
//   const [gymPhotos, setGymPhotos] = useState([]);
//   const [gymCategory, setGymCategory] = useState('normal');

//   const handleSubmit = async (e) => {
//     console.log(gymPhotos);
//     e.preventDefault();
//     const userData = {
//       userType,
//       username,
//       firstName,
//       secondName,
//       lastName,
//       telephone,
//       email,
//       nicNumber,
//       gymCategory,
//       gymLocation,
//       gymPhotos
//     };

//     try {
//       const response = await fetch('http://localhost:3001/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//       });

//       if (response.ok) {
//         // Handle success, maybe redirect to another page
//       } else {
//         // Handle error, maybe show a message to the user
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2 className="register-title">Registration Form</h2>
//       <form onSubmit={handleSubmit} className="register-form">
//         <div className="form-group">
//           <label htmlFor="userType">Register as:</label>
//           <select id="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
//             <option value="owner">Gym Owner</option>
//             <option value="member">Gym Member</option>
//           </select>
//         </div>
//         {userType === 'owner' && (
//           <>
//             <div className="form-group">
//               <label htmlFor="nicNumber">NIC Number:</label>
//               <input type="text" id="nicNumber" value={nicNumber} onChange={(e) => setNicNumber(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="firstName">First Name:</label>
//               <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="secondName">Second Name:</label>
//               <input type="text" id="secondName" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name:</label>
//               <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="telephone">Telephone:</label>
//               <input type="tel" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="gymLocation">Gym Location:</label>
//               <input type="text" id="gymLocation" value={gymLocation} onChange={(e) => setGymLocation(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="gymPhotos">Gym Photos:</label>
//               <input type="file" id="gymPhotos" multiple onChange={handleFileUpload} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="gymCategory">Gym Category:</label>
//               <select id="gymCategory" value={gymCategory} onChange={(e) => setGymCategory(e.target.value)}>
//                 <option value="normal">Normal</option>
//                 <option value="medium">Medium</option>
//                 <option value="luxury">Luxury</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//           </>
//         )}
//          {userType === 'member' && (
//             <>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="firstName">First Name:</label>
//               <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="middleName">Middle Name:</label>
//               <input type="text" id="seconName" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="lastName">Last Name:</label>
//               <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="telephone">Telephone:</label>
//               <input type="tel" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div>
//           </>
//          )}
//         <button type="submit" className="submit-button">Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;
