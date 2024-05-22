import { useQuery } from "@tanstack/react-query";
import axios from "../../lib/axios";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import { Button, Table } from "react-bootstrap";

export default function AllBookings() {
	useTitle("All Users");

	const { data, isLoading, refetch } = useQuery({
		queryKey: ["bookings"],
		queryFn: async () => {
			try {
				const res = await axios.get("/booking");
				return res.data?.bookings;
			} catch (error) {
				console.error(error);
			}
		},
	});

	if (isLoading) return <Loading />;

	const handleDelete = (id) => {
		const agree = window.confirm(`Are you sure you want to delete :${id} `);
		if (agree) {
			axios.delete(`/users/${id}`).then((res) => {
				if (res.status === 0) {
					toast.success("Delete booking.");
					refetch();
				}
			});
		}
	};

	const handleAccept = (id) => {
		const agree = window.confirm(`Are you sure you want to delete :${id} `);
		if (agree) {
			axios.delete(`/users/${id}`).then((res) => {
				if (res.status === 0) {
					toast.success("Delete booking.");
					refetch();
				}
			});
		}
	};

	return (
		<section>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>#</th>
						<th>Buyer Name</th>
						<th>Place</th>
						<th>Country</th>
						<th>From</th>
						<th>Guests</th>
						<th>Children</th>
						<th>Paid</th>
						<th>Amount</th>
						<th>Duration</th>
						<th>Rooms</th>
						<th>TransactionID</th>
						<th>Status</th>
						<th>Booking</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((booking, i) => (
						<tr key={booking._id}>
							<th>{i + 1}</th>
							<td>{booking.buyer.displayName}</td>
							<td>{booking.place.title}</td>
							<td>{booking.country}</td>
							<td>{new Date(booking.dateFrom).toLocaleDateString()}</td>
							<td>{booking.numberOfGuest}</td>
							<td>{booking.numberOfChildren}</td>
							<td>{booking.paidAmount}TK</td>
							<td>{booking.actualAmount}TK</td>
							<td>{booking.duration} days</td>
							<td>{booking.room}</td>
							<td>{booking.transactionId}</td>
							<td>{booking.status}</td>
							<td>{new Date(booking.createdAt).toLocaleString()}</td>
							<td className="p-3">
								<Button
									variant="success"
									size="sm"
									className="mb-2"
									onClick={() => handleAccept(booking._id)}
								>
									Approve
								</Button>
								<Button
									variant="danger"
									size="sm"
									onClick={() => handleDelete(booking._id)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</section>
	);
}
