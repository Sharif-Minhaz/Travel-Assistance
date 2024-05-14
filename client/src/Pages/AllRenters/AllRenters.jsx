import { useQuery } from "@tanstack/react-query";
import Table from "react-bootstrap/Table";
import useTitle from "../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";
import axios from "../../lib/axios";

const AllRenters = () => {
	useTitle("All Renters");

	const {
		data: allUsers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			try {
				const res = await axios.get("/dashboard/allbuyers");
				return res.data?.users;
			} catch (error) {}
		},
	});

	const handleDelete = (id) => {
		const agree = window.confirm(`Are you sure you want to delete :${id} `);
		if (agree) {
			axios.delete(`/users/${id}`).then((res) => {
				if (res.status === 0) {
					// toast.success('Make admin successful.')
					refetch();
				}
			});
		}
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<section>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{allUsers?.map((user, i) => (
						<tr key={user._id}>
							<th>{i + 1}</th>
							<td>{user.displayName}</td>
							<td>{user.email}</td>
							<td>
								<button
									className="btn btn-outline btn-warning btn-xs mr-3 mb-5"
									onClick={() => handleDelete(user._id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</section>
	);
};

export default AllRenters;
