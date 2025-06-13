import { useState } from 'react';
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import AddTrip from '../components/AddTrip';
import { useSelector } from 'react-redux';

export default function Trips() {
    const trips = useSelector((state) => state.trips);

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [editData, setEditData] = useState(null); // To store the trip data that we are editing

    function handleOpenModal(type) {
        setModalType(type);
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
        setModalType("");
        setEditData(null); // To avoid form to keep old data next time
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
                                                <Button
                                                    size='sm'
                                                    className="me-2 text-dark border"
                                                    variant='light'
                                                    onClick={() => {
                                                        setEditData(trip); // To store the trip
                                                        handleOpenModal("edit"); //To open modal in edit mode
                                                    }}
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </Button>
                                                <Button
                                                    size='sm'
                                                    className="text-dark border"
                                                    variant='light'>
                                                    <i className="bi bi-trash3"></i>
                                                </Button>
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
                {(modalType === "add" || modalType === "edit") && (
                    <Modal.Body>
                        <AddTrip onClose={handleClose} editData={editData} />
                    </Modal.Body>
                )}
            </Modal>
        </>


    )
}