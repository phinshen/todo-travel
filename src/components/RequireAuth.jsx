import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function RequireAuth({ children }) {
    const token = useContext(AuthContext).token; //to get current token

    if (!token) {
        return <Navigate to="/" replace />; // if the token not match is wrong, redirect to login page
    }

    return children;
}