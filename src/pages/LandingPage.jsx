import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="mt-5 d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start">
                        <h1 className="display-4 fw-bold text-primary">Plan Your Dream Trip with TripPros ✈️</h1>
                        <p className="lead mt-3">
                            Your Ultimate Travel Companion — Pack smart, plan ahead, and keep everything organized in one place!
                        </p>
                        <ul className="mt-4 list-unstyled">
                            <li>✔️ Plan your trips with detailed itineraries</li>
                            <li>✔️ Manage your packing lists</li>
                            <li>✔️ Organize your documents and bookings</li>
                            <li>✔️ Keep a bucket list of dream destinations</li>
                        </ul>
                        <div className="mt-4">
                            <Button variant="primary" className="me-3" onClick={() => navigate("/login")}>
                                Login
                            </Button>
                            <Button variant="outline-primary" onClick={() => navigate("/signup")}>
                                Sign Up
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="text-center mt-4 mt-md-0">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
                            alt="Travel Illustration"
                            className="img-fluid"
                            style={{ maxHeight: "300px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}