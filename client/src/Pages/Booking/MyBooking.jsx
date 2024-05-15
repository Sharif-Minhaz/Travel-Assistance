// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
// import axios from "../../lib/axios";

const MyBooking = () => {
	// const { user } = useContext(AuthContext);
	useTitle("My Booking");

	return (
		<section>
			<h3 className="text-center text-uppercase mt-4">My booked tours</h3>
			my booking list here
		</section>
	);
};

export default MyBooking;
