import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { countryList } from "../components/countries";

export default function AddTrip({ onAdd }) {
    const [countries, setCountries] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    function addTrip(event) {
        event.preventDefault();
        onAdd({
            id: Date.now(),
            countries,
            fromDate,
            toDate
        });

        setCountries("");
        setFromDate("");
        setToDate("");
    }

    return (
        <Container>
            <Form onSubmit={addTrip}>
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