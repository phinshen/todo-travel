import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { addDocumentAndBookingList, editDocumentAndBookingList } from "../features/documentAndBookingListSlice";

export default function AddDocumentAndBookingList({ onClose, editData }) {
    const [title, setTitle] = useState(editData ? editData.title : "");
    const [bookingNumber, setBookingNumber] = useState(editData ? editData.bookingNumber : "");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        if (editData) {
            dispatch(editDocumentAndBookingList({ id: editData.id, title, bookingNumber }))
            onClose();
        } else {
            dispatch(addDocumentAndBookingList({ title, bookingNumber }));
            setTitle("");
            setBookingNumber("");
            onClose();
        }
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bookingNumber">
                        <Form.Label>Document/Booking Number:</Form.Label>
                        <Form.Control
                            type="text"
                            value={bookingNumber}
                            onChange={(event) => setBookingNumber(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}