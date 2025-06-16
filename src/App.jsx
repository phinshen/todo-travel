import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import RequireAuth from "./components/RequireAuth";
import PackingList from "./pages/PackingList";
import BucketList from "./pages/BucketList";
import DocumentAndBookingList from "./pages/DocumentAndBookingList";
import Signup from "./pages/Signup";
import { logout } from "./features/authSlice";
import './App.css';

import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage";

function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); // check if the user is logged in

  const handleLogout = () => {
    dispatch(logout()); // clear user token from redux store
    navigate("/"); //redirect to landing page
  }

  return (
    <>
      <Navbar style={{ backgroundColor: "#87CEFA" }} variant="light">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/dashboard">
            <i className="bi bi-airplane" style={{ fontSize: "50px" }}></i>
            <Navbar.Text className="ms-3 fw-bold display-6">TripPros</Navbar.Text>
          </Navbar.Brand>
          {token && (
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>} />
          <Route path="/trips" element={
            <RequireAuth>
              <Trips />
            </RequireAuth>} />
          <Route path="/packing-list" element={
            <RequireAuth>
              <PackingList />
            </RequireAuth>} />
          <Route path="/bucket-list" element={
            <RequireAuth>
              <BucketList />
            </RequireAuth>} />
          <Route path="/document-and-booking-list" element={
            <RequireAuth>
              <DocumentAndBookingList />
            </RequireAuth>} />
        </Route>
      </Routes>
    </BrowserRouter>
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