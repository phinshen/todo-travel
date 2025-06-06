import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import useLocalStorage from 'use-local-storage';
import { AuthContext } from "./AuthContext";


export default function App() {
  const [token, setToken] = useLocalStorage("token", null); // setting up a token state, used for authentication

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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