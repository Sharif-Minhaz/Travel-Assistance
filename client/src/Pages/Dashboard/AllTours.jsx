import { useQuery } from "@tanstack/react-query";
import axios from "../../lib/axios";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import { Button, Table } from "react-bootstrap";

export default function AllTours() {
	useTitle("All Tours");

	const { data, isLoading, refetch } = useQuery({
		queryKey: ["places"],
		queryFn: async () => {
			try {
				const res = await axios.get("/places/productCollection");
				return res.data?.places;
			} catch (error) {
				console.error(error);
			}
		},
	});

	if (isLoading) return <Loading />;

	const handleDelete = (id) => {
		const agree = window.confirm(`Are you sure you want to delete? `);
		if (agree) {
			axios.delete(`/places/${id}`).then((res) => {
				if (res.data?.success) {
					toast.success("Tour deleted");
					refetch();
				} else {
					toast.error("Something went wrong");
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
						<th>Title</th>
						<th>Address</th>
						<th>Fee</th>
						<th>Area</th>
						<th>Category</th>
						<th>City</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((place, i) => (
						<tr key={place._id}>
							<th>{i + 1}</th>
							<td className="text-nowrap">{place.title}</td>
							<td className="text-nowrap">{place?.address}</td>
							<td>{place.fee}</td>
							<td>{place.area}</td>
							<td>{place.category}</td>
							<td>{place.city}</td>
							<td className="p-3">
								<Button
									variant="danger"
									size="sm"
									onClick={() => handleDelete(place._id)}
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
