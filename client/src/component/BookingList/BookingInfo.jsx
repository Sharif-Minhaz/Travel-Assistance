import { Card, ListGroup, ListGroupItem, Col, Button, Badge } from "react-bootstrap";

export default function BookingInfo({ booking }) {
	return (
		<Col md={4}>
			<Card style={{ margin: "10px 0" }}>
				<Card.Img variant="top" src={booking.place?.imageURL} />
				<Card.Body>
					<Card.Title>{booking.place.title}</Card.Title>
					<Card.Text>
						<strong>Buyer:</strong> {booking.buyer.displayName}
						<br />
						<strong>Country:</strong> {booking.country}
						<br />
						<strong>Status:</strong>{" "}
						<Badge bg="primary" className="text-capitalize my-2 ms-2">
							{booking.status}
						</Badge>
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						<strong>Number of Guests:</strong> {booking.numberOfGuest}
					</ListGroupItem>
					<ListGroupItem>
						<strong>Number of Children:</strong> {booking.numberOfChildren}
					</ListGroupItem>
					<ListGroupItem>
						<strong>Paid Amount:</strong> ৳ {booking.paidAmount}
					</ListGroupItem>
					<ListGroupItem>
						<strong>Actual Amount:</strong> ৳ {booking.actualAmount}
					</ListGroupItem>
					<ListGroupItem>
						<strong>Duration:</strong> {booking.duration} days
					</ListGroupItem>
					<ListGroupItem>
						<strong>Rooms:</strong> {booking.room}
					</ListGroupItem>
					<ListGroupItem>
						<strong>Transaction ID:</strong> {booking.transactionId}
					</ListGroupItem>
					<div className="p-3 d-flex gap-3">
						<Button variant="warning" className="text-light">
							Cancel
						</Button>
						<Button variant="danger">Delete</Button>
					</div>
				</ListGroup>
				<Card.Footer>
					<small className="text-muted">
						Booked at: {new Date(booking.createdAt).toLocaleString()}
					</small>
				</Card.Footer>
			</Card>
		</Col>
	);
}
