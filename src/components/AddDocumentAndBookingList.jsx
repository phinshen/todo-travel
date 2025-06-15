import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { addDocumentAndBookingList } from "../features/documentAndBookingListSlice";

export default function AddDocumentAndBookingList({ onClose }) {
    const [title, setTitle] = useState("");
    const [bookingNumber, setBookingNumber] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addDocumentAndBookingList({ title, bookingNumber }));
        setTitle("");
        setBookingNumber("");
        onClose();
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