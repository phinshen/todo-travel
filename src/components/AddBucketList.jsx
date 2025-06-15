import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBucketList } from "../features/bucketListSlice";
import { Container, Form, Button } from 'react-bootstrap';
import { countryList } from "./countries";

export default function AddBucketList({ onClose }) {
    const [countries, setCountries] = useState("");
    const [targetDate, setTargetDate] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addBucketList({ countries, targetDate }));
        setCountries("");
        setTargetDate("");
        onClose();
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="countries">
                        <Form.Label>Destination: </Form.Label>
                        <Form.Select
                            value={countries}
                            onChange={(event) => setCountries(event.target.value)}
                            required
                        >
                            <option value="">-- Select Country --</option>
                            {countryList.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="targetDate">
                        <Form.Label>Target Date: </Form.Label>
                        <Form.Control
                            type="date"
                            value={targetDate}
                            onChange={(event) => setTargetDate(event.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
}