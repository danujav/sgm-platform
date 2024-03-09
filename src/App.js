// App.js
import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import MemberDashboardForm from "./MemberDashboardForm";
import UpdateGymForm from "./UpdateGymForm";
import AddGymForm from "./AddGymForm";
import DeleteGymForm from "./DeleteGymForm";

import Home from "../src/pages/Dashboard";

import MiniDrawer from "../src/pages/Layout/Drawer";
import NoMatch from "../src/pages/404Page";
import Supplier from "../src/pages/Supplier";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={localStorage.getItem("role") ? <MiniDrawer /> : <LoginForm />}
      >
        <Route index element={<Home />} />
        <Route path="/add-gyms" element={<AddGymForm />} />
        <Route path="/delete-gyms" element={<DeleteGymForm />} />
        <Route path="/update-gyms" element={<UpdateGymForm />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
