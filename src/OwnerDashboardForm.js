import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Box,
} from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GymAddForm from "./AddGymForm";
import GymUpdateForm from "./UpdateGymForm";
import './OwnerDashboard.css'; // Import the CSS file for styling

function OwnerDashboard() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDashboardForm, setShowDashboardForm] = useState(false);
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Retrieve the user role from localStorage when the component mounts
    const role = localStorage.getItem('userRole');
    setUserRole(role);
    console.log(userRole);

    // Clean up function to remove the effect
    return () => {
      // Optionally perform cleanup tasks here
    };
  }, []);

  const handleAddFormToggle = () => {
    setShowAddForm(!showAddForm);
    setShowUpdateForm(false);
  };
  const handleUpdateFormToggle = () => {
    setShowUpdateForm(!showUpdateForm);
    setShowAddForm(false);
  };

  return (
    <Box className="" sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
      >
        <List>
          <ListItem
            button
            onClick={handleAddFormToggle}
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              "&:hover": {
                backgroundColor: "#66bb6a", // Light blue color on hover
              },
            }}
          >
            <ListItemIcon>{/* Add Icon Component */}</ListItemIcon>
            <ListItemText primary="Gym Add" />
          </ListItem>
          {/* Other ListItems */}
        </List>
        <List>
          <ListItem
            button
            onClick={handleUpdateFormToggle}
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              "&:hover": {
                backgroundColor: "#66bb6a", // Light blue color on hover
              },
            }}
          >
            <ListItemIcon>{/* Add Icon Component */}</ListItemIcon>
            <ListItemText primary="Gym Update Details" />
          </ListItem>
          {/* Other ListItems */}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {showAddForm && (
          <Container maxWidth="sm">
            <GymAddForm />
          </Container>
        )}
        {showUpdateForm && (
          <Container maxWidth="sm">
            <GymUpdateForm />
          </Container>
        )}
      </Box>
    </Box>
  );
}

export default OwnerDashboard;
