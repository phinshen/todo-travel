import { Col, Card, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const trips = useSelector((state) => state.trips);
    const packingList = useSelector((state) => state.packingList);
    const bucketList = useSelector((state) => state.bucketList);
    const documentAndBookingList = useSelector((state) => state.documentAndBookingList);

    const upcomingTrips = trips
        .filter(trip => new Date(trip.fromDate) > new Date()) //only future trips
        .sort((a, b) => new Date(a.fromDate) - new Date(b.fromDate)); // sort by soonest

    const nextTrips = upcomingTrips[0]; //get the first index in the array

    const unpackedItems = packingList.filter(item => !item.packed).slice(0, 3); //limit to 3 items to show on dashboard

    return (
        <Container className='my-3'>
            <Row>

                {/* ---------------------------------------------------------- Trips Section ----------------------------------------------- */}
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/trips")} >
                        <Card.Body>
                            <Card.Title>
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Trips
                            </Card.Title>
                            {nextTrips ? (
                                <Card.Text className="mt-3 p-3 bg-light rounded border">
                                    <strong className="text-primary">Upcoming Trip</strong><br />
                                    <span className="fw-semibold">{nextTrips.countries}</span><br />
                                    <small className="text-muted">{nextTrips.fromDate}</small>
                                </Card.Text>
                            ) : (
                                <Card.Text className="mt-2 text-muted">
                                    No upcoming trips
                                </Card.Text>
                            )}
                        </Card.Body>
                    </Card>
                </Col>

                {/* ---------------------------------------------------------- Packing Section ----------------------------------------------- */}
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/packing-list")}>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi-bag-fill me-2"></i>
                                Packing List
                            </Card.Title>
                            <Card.Text className="mt-3 p-3 bg-light rounded border">
                                {packingList.filter(item => !item.packed).length === 0 ? (
                                    <span className="text-success fw-semibold">All items packed</span>
                                ) : (
                                    <>
                                        <strong className="text-primary">Remaining Items</strong><br />
                                        <ul className="mb-0 ps-3" style={{ fontSize: "0.9rem" }}>
                                            {unpackedItems.map((item) => (
                                                <li key={item.id}>{item.item}</li>
                                            ))}
                                            {packingList.filter(i => !i.packed).length > 3 && (
                                                <span className="text-muted">...and more</span>
                                            )}
                                        </ul>
                                    </>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* ---------------------------------------------------------- Document and Booking Section ----------------------------------------------- */}
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/document-and-booking-list")}>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi-file-earmark-text-fill me-2"></i>
                                Document and Booking List
                            </Card.Title>
                            <Card.Text className="mt-3 p-3 bg-light rounded border">
                                {documentAndBookingList.length > 0 ? (
                                    <>
                                        <strong className="text-primary">Document Detail</strong>
                                        <ul className="mb-0 ps-3" style={{ fontSize: "0.9rem" }}>
                                            {documentAndBookingList.slice(0, 3).map((document) => (
                                                <li key={document.id}>
                                                    <span className="fw-semibold">{document.title}</span><br />
                                                    <span className="text-muted">Document No.: {document.bookingNumber}</span>
                                                </li>
                                            ))}
                                            {documentAndBookingList.lenght > 3 && (
                                                <span className="text-muted">...and more</span>
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <span>No document added</span>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* ---------------------------------------------------------- Bucket List Section ----------------------------------------------- */}
                <Col md={6} className='my-3'>
                    <Card className="card-hover" onClick={() => navigate("/bucket-list")}>
                        <Card.Body>
                            <Card.Title>
                                <i className="bi-star-fill me-2"></i>
                                Bucket List
                            </Card.Title>
                            <Card.Text className="mt-3 p-3 bg-light rounded border">
                                {bucketList.length > 0 ? (
                                    <>
                                        <strong className="text-primary">Destination To Go</strong>
                                        <ul className="mb-0 ps-3" style={{ fontSize: "0.9rem" }}>
                                            {bucketList.slice(0, 3).map((item) => (
                                                <li key={item.id}>
                                                    {item.countries}<br />
                                                    <span className="text-muted">Target Date: {item.targetDate}</span>
                                                </li>
                                            ))}
                                            {bucketList.lenght > 3 && (
                                                <span className="text-muted">...and more</span>
                                            )}
                                        </ul>
                                    </>
                                ) : (
                                    <span>No bucket list added</span>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>
    )
}
