import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { addItem } from "../features/packingListSlice";


export default function AddItem({ onClose }) {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addItem(item));
        setItem("");
        onClose();
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="item">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={item}
                        onChange={(event) => setItem(event.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}


