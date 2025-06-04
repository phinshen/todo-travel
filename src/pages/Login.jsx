import { Container, Button, Form } from "react-bootstrap"
import { useState } from "react";



export default function Login() {
    const [username, setUsername] = useState(""); // to store email input
    const [password, setPassword] = useState(""); // to store password input

    return (
        <Container>
            <h1>Login to your account</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary">Login</Button>
            </Form>
        </Container>
    )
}