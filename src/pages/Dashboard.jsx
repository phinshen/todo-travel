import { Col, Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <Container className='my-3'>
            <Row>
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/trips")} >
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Trips
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/packing-list")}>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi-bag-fill me-2"></i>
                                Packing List
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/document-and-booking-list")}>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi-file-earmark-text-fill me-2"></i>
                                Document and Booking List
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/bucket-list")}>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi-star-fill me-2"></i>
                                Bucket List
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
