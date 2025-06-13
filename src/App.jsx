import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import useLocalStorage from 'use-local-storage';
import RequireAuth from "./components/RequireAuth";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Container, Navbar, Nav } from "react-bootstrap";
import './App.css';

function Layout() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#87CEFA" }} variant="light">
        <Container>
          <Navbar.Brand href="/dashboard">
            <i className="bi bi-airplane" style={{ fontSize: "50px" }}></i>
            <Navbar.Text className="ms-3 fw-bold display-6">TripPros</Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [token, setToken] = useLocalStorage("token", null); // setting up a token state, used for authentication

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>} />
            <Route path="/trips" element={
              <RequireAuth>
                <Trips />
              </RequireAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}












// Ultimate Travel Planner:
// One can list everything that needs to be packed based on various vacations // PackingList.jsx
// plan future trips // Trip.jsx
// keep documents and bookings organised // DocumentAndBookingList.jsx
// keep a bucket list of all the places one wants to visit. // BucketList.jsx

// Pages:
// Home
// Login Page
// Dashboard
// Trip.jsx
// PackingList.jsx
// DocumentAndBookingList.jsx
// BucketList.jsx

// components:
// AuthRequired.jsx

// src:
// AuthContext.js

// Extra component to add:
// Countdown Timer to each trip