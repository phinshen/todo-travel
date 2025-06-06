import { Container, Button, Form } from "react-bootstrap"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState(""); // to store email input
    const [password, setPassword] = useState(""); // to store password input
    const [error, setError] = useState(null); // to store error messages 
    const authContext = useContext(AuthContext); // to get access to the token
    const navigate = useNavigate(); //allow programmatic page navatigation

    function login() {
        const isCorrectUsername = username === "example@example.com";
        const isCorrectPassword = password === "password";

        if (isCorrectUsername && isCorrectPassword) {
            setError(""); // clear error if login is correct
            authContext.setToken("1234"); //save token in context
            navigate("/dashboard");
        } else {
            setError('Incorrect username/password'); // show error
        }

    }

    return (
        <div className="my-5">
            <Container>
                <h1>Welcome to Your Ultimate Travel Companion!</h1>
                <p className="fs-3">Please login to access your planner.</p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Form>
                    <Form.Group controlId="formBasicEmail" className="my-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="w-50"
                            type="email"
                            placeholder="Enter your email"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
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

                    <Button className="my-1" variant="primary" onClick={login}>Login</Button>
                </Form>
            </Container>
        </div>
    )
}