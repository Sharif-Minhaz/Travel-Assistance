import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (!user) {
		if (loading) {
			return (
				<div className="spinner-border text-warning" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			);
		}

		return <Navigate to="/login" state={{ from: location }} replace />;
	} else {
		return children;
	}
};

export default PrivateRoute;
