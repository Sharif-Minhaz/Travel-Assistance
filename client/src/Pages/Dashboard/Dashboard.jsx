import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import NavSection from "../../Shared/Navbar/NavSection";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";
import useTitle from "../../hooks/useTitle";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useAdmin(user?.email);
	const [isSeller] = useSeller(user?.email);
	const [, setMyProperty] = useState([]);
	useTitle("Dashboard");
	useEffect(() => {
		fetch("dashboard-data.json")
			.then((res) => res.json())
			.then((data) => setMyProperty(data));
	}, []);

	return (
		<div className="container">
			<NavSection />
			<h3 className="text-center mb-5 mt-5">Welcome to Dashboard</h3>
			<div className="row">
				<div className="col-md-3 col-lg-3 col-sm-12 mb-4">
					{isAdmin && (
						<>
							<div className="">
								<Link className="dashboard-btn " to="/dashboard/allRenters">
									All Renters
								</Link>
							</div>
							<div className="mt-3">
								<Link className="dashboard-btn " to="/dashboard/allOwners">
									All Owners
								</Link>
							</div>
						</>
					)}
					{isSeller && (
						<>
							<div className="">
								<Link className="dashboard-btn " to="/dashboard/myProperty">
									My Property
								</Link>
							</div>
							<div className="mt-3">
								<Link className="dashboard-btn " to="/addProperty">
									Add Property
								</Link>
							</div>
						</>
					)}
				</div>
				<div className="col-md-9 col-lg-9  col-sm-12">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
