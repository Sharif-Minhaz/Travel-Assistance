import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCloudSun } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopListingProperty.css";
import Loading from "../../Shared/Loading/Loading";
import axios from "../../lib/axios";
import { useEffect, useState } from "react";
import { MdOutlineNightsStay } from "react-icons/md";

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
				<p>Top Tourist Places</p>
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
									src={pro.imageURL}
									className="card-img-top img-fluid w-100 object-fit-cover"
									alt="..."
								/>
							</div>
							<div style={{ minHeight: "308px" }} className="card-info">
								<p style={{ fontSize: "20px" }} className="fw-bold">
									{pro.title}
								</p>

								<span>
									<ImLocation2 className="property-des-style" />
									<span className="d-inline-block ms-1">
										{pro.area}, {pro.city}
									</span>
								</span>
								<p> Category: {pro.category}</p>
								<div className="d-flex mt-2 justify-content-start gap-4">
									<span className="fw-semibold">
										<FaCloudSun className="font-awesome-icon me-1" />{" "}
										{pro.openingTime}
									</span>
									<span className="fw-semibold">
										<MdOutlineNightsStay className="font-awesome-icon me-1" />{" "}
										{pro.closingTime}
									</span>
								</div>
								<div className="mt-3">
									<span>
										Best Month: <strong>{pro.bestMonthToVisit}</strong>
									</span>
								</div>
								<div className="mt-2">
									<span>
										Tour Fees: <strong>{pro.fee} TK</strong>
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
					View All Places
				</Link>
			</div>
		</div>
	);
};

export default TopListingProperty;
