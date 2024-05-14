import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopListingProperty.css";
import Loading from "../../Shared/Loading/Loading";
import axios from "../../lib/axios";
import { useEffect, useState } from "react";

const TopListingProperty = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [property, setProperty] = useState([]);

	useEffect(() => {
		function fetchData() {
			try {
				setLoading(true);
				axios
					.get(`/products/productCollection`)
					.then((res) => setProperty(res.data?.places));
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) return <Loading />;

	if (error) return <p>Error occurred: {error.message}</p>;

	return (
		<div className="container mt-5">
			<div className="text-center category-title my-5">
				<p>Top Listing Property</p>
			</div>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				breakpoints={{
					400: {
						width: 400,
						slidesPerView: 1,
					},
					520: {
						width: 520,
						slidesPerView: 2,
					},
					960: {
						width: 950,
						slidesPerView: 3,
					},
					1290: {
						width: 1290,
						slidesPerView: 4,
					},
					1110: {
						width: 1110,
						slidesPerView: 4,
					},
				}}
				className="mySwiper"
			>
				{property?.map((pro) => (
					<SwiperSlide key={pro._id}>
						<div className="card">
							<div className="card-image text-center">
								<img
									src={pro.image}
									className="card-img-top img-fluid w-100 object-fit-cover"
									alt="..."
								/>
							</div>
							<div className="card-info">
								<p className="fw-bold">{pro.title}</p>

								<span>
									<ImLocation2 className="property-des-style" />
									{pro.area}, {pro.city}
								</span>
								<p> Property Type: {pro.category}</p>
								<div className="d-flex justify-content-start gap-4">
									<span>
										<FaBed className="property-des-style" /> {pro.room}
									</span>
									<span>
										<FaBath className="property-des-style" /> {pro.bath}
									</span>
									<span>
										<FaSquare className="property-des-style" />{" "}
										{pro.propertySize} sqft.
									</span>
								</div>
								<div className="mt-2">
									<span>
										Available From:{" "}
										<b className="property-des-style">{pro.month}</b>
									</span>
								</div>
								<div className="mt-2">
									<span>
										Rent: <span className="property-des-style">{pro.rent}</span>{" "}
										TK
									</span>
								</div>
								<div className="text-center mt-4 mb-3">
									<Link to={`/details/${pro._id}`} className="details">
										View Details
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="text-center mt-5 mb-5">
				<Link to="/allProperty" className="details">
					View All Property
				</Link>
			</div>
		</div>
	);
};

export default TopListingProperty;
