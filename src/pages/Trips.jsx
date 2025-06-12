import { useState } from 'react';
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import AddTrip from '../components/AddTrip';
import useLocalStorage from 'use-local-storage';

export default function Trips() {
    const [trips, setTrips] = useLocalStorage("trips", []);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");

    function handleAddTrip(newTrip) {
        setTrips((prev) => [...prev, newTrip]);
        handleClose();
    }

    function handleOpenModal(type) {
        setModalType(type);
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
        setModalType("");
    }

    return (
        <>
            <Container className="my-3">
                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="mby-4">Upcoming Trip </h1>
                        <Button className="mby-4" onClick={() => handleOpenModal("add")}>Add Trip</Button>
                    </div>

                    {trips.length === 0 && <p className="my-3">No trips yet.</p>}
                    {trips.map((trip) => (
                        <div key={trip.id}>
                            <Col md={6} className='my-3'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            {trip.countries}
                                            <div>
                                                <Button size='sm' className="me-2 text-dark border" variant='light'><i className="bi bi-pencil"></i></Button>
                                                <Button size='sm' className="text-dark border" variant='light'><i className="bi bi-trash3"></i></Button>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            From: {trip.fromDate} <br />
                                            To: {trip.toDate}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    ))}
                </Row>
            </Container>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Trip</Modal.Title>
                </Modal.Header>
                {modalType === "add" && (
                    <Modal.Body>
                        <AddTrip onAdd={handleAddTrip} />
                    </Modal.Body>
                )}
            </Modal>
        </>


    )
}