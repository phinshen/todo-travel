import { Container, Button, Form } from "react-bootstrap"
import { useState } from "react";
import { login } from "../features/authSlice";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

export default function Login() {
    const [email, setEmail] = useState(""); // to store email input
    const [password, setPassword] = useState(""); // to store password input
    const [error, setError] = useState(null); // to store error messages 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogin(event) {
        event.preventDefault(); // prevent the page to refresh after submit
        const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
        // convert string to array // retrieve stored user from localStorage

        // check if credential is match
        if (
            storedUser &&
            storedUser.email === email &&
            storedUser.password === password
        ) {
            setError(""); // clear error if login is correct
            dispatch(login({ token: "1234", user: { email } }));
            navigate("/dashboard");
        } else {
            setError('Incorrect username/password. Please sign up first'); // show error
        }

        if (!storedUser) {
            setError("No account found. Please sign up first.");
            return;
        }

    }

    return (
        <div className="my-5">
            <Container>
                <h1>Welcome Back!</h1>
                <p className="fs-3">Please login to access your planner.</p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="formBasicEmail" className="my-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="w-50"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We&apos;ll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="w-50"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Button className="my-1" variant="primary" type="submit">Login</Button>
                    <div className="mt-3">
                        <span className="text-muted">Don&apos;t have an account? </span>
                        <a href="/signup" className="signup-link">
                            Sign up
                        </a>
                    </div>
                </Form>
            </Container>
        </div>
    )
}