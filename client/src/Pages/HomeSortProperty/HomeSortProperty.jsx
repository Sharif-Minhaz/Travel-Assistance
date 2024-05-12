import { useEffect, useState } from "react";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import axios from "../../lib/axios";
import "./HomeSortProperty.css";
import Loading from "../../Shared/Loading/Loading";

const HomeSortProperty = () => {
	const { state } = useLocation();
	const [loading, setLoading] = useState(false);
	const [add, setAdd] = useState([]);

	useEffect(() => {
		function fetchData() {
			setLoading(true);
			try {
				axios.get(`/products/categoryWiseData?title=${state.data.title}`).then((res) => {
					setAdd(res.data?.restaurants);
				});
			} catch (error) {
				console.error(error.message);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [state.data.title]);

	return (
		<section>
			<div className="sort-property-bg">
				<div className="sort-banner-title py-5">
					<p>Find Your Perfect Table</p>
					<span>Discover and Reserve Your Favorite Dining Spots</span>
				</div>
			</div>
			<div className="container">
				<h4 className=" mt-5 ">All property for {state.data.title}:-</h4>
				<p className="ms-2 fs-4 text-danger"> {add.length} results</p>
				<div className="card-content">
					{loading && <Loading />}
					{add?.map((post) => (
						<div key={post._id} className="card">
							<div className="card-image text-center">
								<img src={post.image} className="card-img-top" alt="..." />
							</div>
							<div className="card-info">
								<p className="fw-bold">{post.title}</p>

								<span>
									<ImLocation2 className="property-des-style" />
									{post.area}, {post.city}
								</span>
								<p> Property Type: {post.category}</p>
								<div className="d-flex justify-content-start gap-4">
									<span>
										<FaBed className="property-des-style" /> {post.room}
									</span>
									<span>
										<FaBath className="property-des-style" /> {post.bath}
									</span>
									<span>
										<FaSquare className="property-des-style" />{" "}
										{post.propertySize} sqft.
									</span>
								</div>
								<div className="mt-2">
									<span>
										Available From:{" "}
										<b className="property-des-style">{post.month}</b>
									</span>
								</div>
								<div className="mt-2">
									<span>
										Rent:{" "}
										<span className="property-des-style">{post.rent}</span> TK
									</span>
								</div>
								<div className="text-center mt-2">
									<Link to={`/details/${post._id}`} className="details">
										View Details
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center my-3">
					<Link to="/allProperty" className="details">
						View All Property
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeSortProperty;
