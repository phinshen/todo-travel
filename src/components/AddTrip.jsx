import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { countryList } from "./countries";
import { useDispatch } from "react-redux";
import { addTrip, editTrip } from "../features/tripsSlice";

export default function AddTrip({ onClose, editData }) {
    const [countries, setCountries] = useState(editData ? editData.countries : ""); // to store selected countries from dropdown
    const [fromDate, setFromDate] = useState(editData ? editData.fromDate : ""); // To stores trip start date
    const [toDate, setToDate] = useState(editData ? editData.toDate : ""); // To stores trip end date
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault(); // stops the page from reloading

        if (editData) {
            dispatch(editTrip({ id: editData.id, countries, fromDate, toDate }));
            onClose();
        } else {
            dispatch(addTrip({ countries, fromDate, toDate })); // send trip data to Redux by calling the addTrip action
            setCountries(""); // clear the form on countries part
            setFromDate(""); // clear the form on fromDate part
            setToDate(""); // clear the form on toDate part
            onClose();
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="countries">
                    <Form.Label>Destination: </Form.Label>
                    <Form.Select
                        value={countries}
                        onChange={(event) => setCountries(event.target.value)}
                        required
                    >
                        <option value="">-- Select Country -- </option>
                        {countryList.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="fromDate">
                    <Form.Label>From: </Form.Label>
                    <Form.Control
                        type="date"
                        value={fromDate}
                        onChange={(event) => setFromDate(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="toDate">
                    <Form.Label>To: </Form.Label>
                    <Form.Control
                        type="date"
                        value={toDate}
                        onChange={(event) => setToDate(event.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

