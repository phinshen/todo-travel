import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, FormGroup, Nav } from 'react-bootstrap';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    function handleSignup(event) {
        event.preventDefault();

        const existingUser = JSON.parse(localStorage.getItem("registeredUser"));
        if (existingUser && existingUser.email === email) {
            setError("User already exists. Please login,");
            return;
        }

        localStorage.setItem("registeredUser", JSON.stringify({ email, password }))
        dispatch(signup({ token: "1234", user: { email } }));
        navigate("/dashboard");
    }

    return (
        <Container className="my-5">
            <h1>Sign Up</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form onSubmit={handleSignup}>
                <FormGroup className="my-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className="w-50"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <Form.Text>
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </FormGroup>

                <FormGroup className="my-3" controlId="password">
                    <Form.Control
                        className="w-50"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </FormGroup>

                <Button className="my-1" type="submit">Signup</Button>
                <div className="mt-3">
                    <span className="text-muted">Already have an account? </span>
                    <a href="/login" className="signup-link">
                        Sign in
                    </a>
                </div>
            </Form>
        </Container>
    )
}