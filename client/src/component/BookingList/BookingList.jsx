import { Container, Row } from "react-bootstrap";
import BookingInfo from "./BookingInfo";

const BookingList = ({ bookings }) => {
	return (
		<Container>
			<Row>
				{bookings.map((booking, index) => (
					<BookingInfo key={booking?._id || index} booking={booking} />
				))}
			</Row>
		</Container>
	);
};

export default BookingList;
