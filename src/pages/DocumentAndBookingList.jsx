import { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteDocumentAndBookingList } from "../features/documentAndBookingListSlice";
import AddDocumentAndBookingList from "../components/AddDocumentAndBookingList";

export default function DocumentAndBookingList() {
    const documentAndBookingList = useSelector((state) => state.documentAndBookingList);
    const dispatch = useDispatch();

    const [modalType, setModalType] = useState("");
    const [editData, setEditData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    function handleOpenModal(type) {
        setModalType(type);
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
        setModalType("");
        setEditData(null);
    }

    function handleDelete(documentListId) {
        const confirmDelete = window.confirm("Are you sure you want to delete this document/booking?");

        if (confirmDelete) {
            dispatch(deleteDocumentAndBookingList({ id: documentListId }))
        }
    }

    return (
        <>
            <Container className="my-3">
                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mby-4">Document and Booking List</h2>
                        <Button className="mby-4" onClick={() => handleOpenModal("add")}>Add Document/Booking</Button>
                    </div>

                    {documentAndBookingList.length === 0 && <p className="my-3">No document/booking added yet.</p>}
                    {documentAndBookingList.map((document) => (
                        <div key={document.id}>
                            <Col md={6} className="my-3">
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            {document.title}
                                            <div>
                                                <Button
                                                    size="sm"
                                                    className="me-2 text-dark border"
                                                    variant="light"
                                                    onClick={() => {
                                                        setEditData(document);
                                                        handleOpenModal("edit");
                                                    }}
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="me-2 text-dark border"
                                                    variant="light"
                                                    onClick={() => {
                                                        handleDelete(document.id);
                                                    }}
                                                >
                                                    <i className="bi bi-trash3"></i>
                                                </Button>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            Document/Booking No.: {document.bookingNumber}
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
                    <Modal.Title>Add Document/Booking</Modal.Title>
                </Modal.Header>
                {(modalType === "add" || modalType === "edit") && (
                    <Modal.Body>
                        <AddDocumentAndBookingList onClose={handleClose} editData={editData} />
                    </Modal.Body>
                )}
            </Modal>
        </>
    )
}