import { useState } from "react"
import { Modal, Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { togglePacked } from "../features/packingListSlice";

import AddItem from "../components/AddItem";

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
                    {packingList.map((pack => (
                        <div
                            key={pack.id}
                            className="mt-2"
                            style={{
                                textDecoration: pack.packed ? "line-through" : "none",
                                color: pack.packed ? "gray" : "black"
                            }}
                        >
                            <input
                                type="checkbox"
                                className="form-check-input me-2"
                                checked={pack.packed}
                                onChange={() => dispatch(togglePacked(pack.id))}
                            />
                            {pack.item}
                        </div>
                    )))}
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