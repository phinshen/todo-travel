import { Container, Row, Col, Card } from 'react-bootstrap';


export default function Trips() {
    return (
        <Container className="my-3">
            <Row>
                <Col md={6} className='my-3'>
                    <h1 className="mb-4">Trips</h1>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Trips
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}