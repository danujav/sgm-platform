// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MemberDashboardForm from './MemberDashboardForm';
import OwnerDashboardForm from './OwnerDashboardForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/member-dashboard" element={<MemberDashboardForm />}/>
        <Route path="/owner-dashboard" element={<OwnerDashboardForm />}/>
      </Routes>
    </Router>
  );
}

export default App;
