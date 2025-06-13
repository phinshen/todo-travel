import { useState } from "react"
import { Modal, Button, Container, Row, ListGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { togglePacked } from "../features/packingListSlice";

import AddItem from "../components/AddItem";
import { deleteItem } from "../features/packingListSlice";

export default function PackingList() {
    const packingList = useSelector((state) => state.packingList);
    const dispatch = useDispatch();

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
                        <h2 className="mby-4">Item List</h2>
                        <Button className="mby-4" onClick={() => handleOpenModal()}>Add Item</Button>
                    </div>

                    {packingList.length === 0 && <p className="my-3">No item added yet.</p>}
                    <ListGroup className="w-100 my-2">
                        {packingList.map((pack => (
                            <ListGroup.Item
                                key={pack.id}
                                className="packing-item d-flex justify-content-between align-items-center mt-2"
                            >
                                <div>
                                    <Form.Check
                                        type="checkbox"
                                        label={
                                            <span className={pack.packed ? "text-decoration-line-through text-muted" : ""}>
                                                {pack.item}
                                            </span>
                                        }
                                        checked={pack.packed}
                                        onChange={() => dispatch(togglePacked(pack.id))}
                                    />
                                </div>
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    className="delete-btn"
                                    onClick={() => dispatch(deleteItem(pack.id))}
                                >
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </ListGroup.Item>
                        )))}
                    </ListGroup>
                </Row>

            </Container>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddItem onClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    )
}