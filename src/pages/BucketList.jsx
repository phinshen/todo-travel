import { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { deleteBucketList } from "../features/bucketListSlice";
import AddBucketList from "../components/AddBucketList";

export default function BucketList() {
    const bucketList = useSelector((state) => state.bucketList);
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

    function handleDelete(bucketListId) {
        const confirmDelete = window.confirm("Are you sure you want to delete this bucket list?");

        if (confirmDelete) {
            dispatch(deleteBucketList({ id: bucketListId }))
        }
    }

    return (
        <>
            <Container className="my-3">
                <Row>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mby-4">Bucket List - Country to Travel</h2>
                        <Button className="mby-4" onClick={() => handleOpenModal("add")}>Add Country</Button>
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
                                                    onClick={() => {
                                                        setEditData(bucket);
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
                                                        handleDelete(bucket.id)
                                                    }}
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
                    <Modal.Title>{modalType === "edit" ? "Edit Country" : "Add Country"}</Modal.Title>
                </Modal.Header>
                {(modalType === 'add' || modalType == "edit") && (
                    <Modal.Body>
                        <AddBucketList onClose={handleClose} editData={editData} />
                    </Modal.Body>
                )}

            </Modal>
        </>
    )
}