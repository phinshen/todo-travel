import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBucketList, editBucketList } from "../features/bucketListSlice";
import { Container, Form, Button } from 'react-bootstrap';
import { countryList } from "./countries";

export default function AddBucketList({ onClose, editData }) {
    const [countries, setCountries] = useState(editData ? editData.countries : "");
    const [targetDate, setTargetDate] = useState(editData ? editData.targetDate : "");
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        if (editData) {
            dispatch(editBucketList({ id: editData.id, countries, targetDate }))
            onClose();
        } else {
            dispatch(addBucketList({ countries, targetDate }));
            setCountries("");
            setTargetDate("");
            onClose();
        }
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