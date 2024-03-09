// App.js
import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import MemberDashboardForm from "./MemberDashboardForm";
import UpdateGymForm from "./UpdateGymForm";
import AddGymForm from "./AddGymForm";

import Home from "../src/pages/Dashboard";

import MiniDrawer from "../src/pages/Layout/Drawer";
import NoMatch from "../src/pages/404Page";
import Supplier from "../src/pages/Supplier";
import PaymentForm from "./PaymentForm";
import FindNearestForm from "./FindNearestForm";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/"
        element={localStorage.getItem("role") ? <MiniDrawer /> : <LoginForm />}
      >
        <Route index element={<Home />} />
        <Route path="/add-gyms" element={<AddGymForm />} />
        <Route path="/find-nearest-gym" element={<FindNearestForm />} />
        <Route path="/update-gyms" element={<UpdateGymForm />} />
        <Route path="/payments" element={<PaymentForm />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
