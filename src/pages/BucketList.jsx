import { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { useSelector } from "react-redux";

import AddBucketList from "../components/AddBucketList";

export default function BucketList() {
    const bucketList = useSelector((state) => state.bucketList);

    const [showModal, setShowModal] = useState(false);

    function handleOpenModal() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
    }

    return (
        <>
            <Container className="my-3">
                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mby-4">Bucket List - Country to Travel</h2>
                        <Button className="mby-4" onClick={() => handleOpenModal()}>Add Country</Button>
                    </div>

                    {bucketList.length === 0 && <p className="my-3">No country added yet.</p>}
                    {bucketList.map((bucket) => (
                        <div key={bucket.id}>
                            <Col md={6} className="my-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            {bucket.countries}
                                            <div>
                                                <Button
                                                    size="sm"
                                                    className="me-2 text-dark border"
                                                    variant="light"
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="me-2 text-dark border"
                                                    variant="light"
                                                >
                                                    <i className="bi bi-trash3"></i>
                                                </Button>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            Target Date: {bucket.targetDate}
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
                    <Modal.Title>Add Country</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBucketList onClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}