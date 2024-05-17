import { MdCall, MdLocationOn, MdMail } from "react-icons/md";

import "./PropertyDetails.css";
import PropertyDescription from "../../component/PropertyDescription/PropertyDescription";
import { useLoaderData } from "react-router-dom";
import Reviews from "../../component/Reviews/Reviews";
import PeopleReviews from "../../component/Reviews/PeopleReviews";
import OrderInformation from "../../component/Order/OrderInformation";
import { useState } from "react";
import useTitle from "./../../hooks/useTitle";
import AvailablePackages from "../../component/AvailablePackages/AvailablePackages";
import ShoppingMall from "../../component/ShoppingMall/ShoppingMall";
import Events from "../../component/Events/Events";

const PropertyDetails = () => {
	useTitle("Booking");
	const data = useLoaderData();

	const { area, city, imageURL, title, addedBy, fee: tourFee, transportOptions } = data?.place;

	const [fee, setFee] = useState(tourFee);

	return (
		<div>
			<section className="banner-section container my-5">
				<h3>{title}</h3>
				<p>
					<MdLocationOn className="font-awesome-icon me-2" /> {area}, {city}
				</p>
				<div className="row gx-5 gy-4">
					<div className="col-lg-8 col-md-8 col-12">
						<div id="carouselExampleIndicators1" className="carousel slide">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										draggable={false}
										src={imageURL}
										className="d-block w-100 banner-image-resize"
										alt="..."
									/>
								</div>
							</div>
						</div>
						<div className="features-section mt-3">
							<div className="features">
								<PropertyDescription data={data?.place} />
							</div>
							<div className="features">
								<AvailablePackages />
							</div>
							<div className="features">
								<ShoppingMall data={data?.place?.shoppingMall} />
							</div>
							<div className="features">
								<Events data={data?.place?.events} />
							</div>
							<div className="features">
								<PeopleReviews />
							</div>
							<div className="features">
								<Reviews />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-12 contact-section">
						<h4>Manage By:- </h4>
						<div className="mt-4">
							<img src="/logo.svg" alt="logo" />
						</div>
						<img src="./assets/img/logo.svg" alt="" />
						<p className="mt-3">
							Contact With organizer for more information and further query.
						</p>
						<div className="mt-2 fs-5">
							Contact us: <i className="fa-solid fa-message font-awesome-icon"></i>
						</div>

						<div className="d-flex flex-wrap gap-3 mt-2">
							<button className="contact-btn">
								<a
									className="d-flex justify-content-center align-items-center gap-2"
									href={"tel:" + addedBy.phoneNumber}
								>
									<MdCall size={18} /> Call
								</a>
							</button>
							<button className="contact-btn">
								<a
									className="d-flex justify-content-center align-items-center gap-2"
									href={"mailto:" + addedBy.email}
								>
									<MdMail size={18} /> Email
								</a>
							</button>
						</div>
						{/* ------------ payment information ------------ */}
						<div>
							<div className="tour-price">
								<sup>৳</sup> {fee} TK
							</div>
						</div>
						{/* --------- order information ----------- */}
						<div>
							<OrderInformation
								transportOptions={transportOptions}
								baseFee={tourFee}
								fee={fee}
								setFee={setFee}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PropertyDetails;
