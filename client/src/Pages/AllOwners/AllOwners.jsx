import { useQuery } from "@tanstack/react-query";
import Table from "react-bootstrap/Table";
import useTitle from "../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";
import axios from "../../lib/axios";
import { baseUrl } from "../../constants";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AllOwners = () => {
	const { user: me } = useContext(AuthContext);
	useTitle("All Admins");

	const {
		data: allUsers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			try {
				const res = await fetch(`${baseUrl}/dashboard/allbuyers`); // admins
				const data = await res.json();
				return data.users;
			} catch (error) {
				console.error(error);
				throw new Error(error);
			}
		},
	});

	const handleDelete = (id) => {
		const agree = window.confirm(`Are you sure you want to delete :${id} `);
		if (agree) {
			axios.delete(`/users/${id}`).then((res) => {
				if (res.status === 200) {
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
		<div>
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
									disabled={me?.email === user.email}
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
		</div>
	);
};

export default AllOwners;
