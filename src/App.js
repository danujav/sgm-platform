// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import MemberDashboardForm from "./MemberDashboardForm";
import OwnerDashboardForm from "./OwnerDashboardForm";
import AddGymForm from "../src/AddGymForm";

import  Home from "../src/pages/Dashboard";

import MiniDrawer from "../src/pages/Layout/Drawer";
import NoMatch from "../src/pages/404Page";

function App() {
  return (
    <Routes>
    <Route path="/" element={<MiniDrawer />}>
      <Route index element={<Home />} />
      <Route path="/add-gym" element={<AddGymForm />} />
      {/* <Route path="/delete-gym" element={<Supplier />} />
      <Route path="update-gym" element={<Orders />} /> */}
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  );
}

export default App;
