import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
    const token = useSelector((state) => state.auth.token);

    if (!token) {
        return <Navigate to="/" replace />; // if the token not match is wrong, redirect to login page
    }

    return children;
}