import { FaCity, FaMapPin, FaCarSide, FaCloudSun } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { MdDateRange, MdOutlineNightsStay, MdOutlineQrCode } from "react-icons/md";

// import { useLoaderData } from "react-router-dom";

const data = {
	category: "Adventure",
	fee: 5000,
	transportOptions: ["bus", "car"],
	bestMonthToVisit: "January",
	area: "Rangamati",
	city: "Chattogram",
	zipCode: 1201,
	details:
		"Hanging Bridge(Jhulonto Bridge in Bengali)is the landmark icon of Rangamati. It’s a popular tourist spot and a must go destination. If you don’t visit Rangamati you will not discover a big portion of natural beauties of Bangladesh. From Chittagong a 77 km. road amidst green fields and winding hills will take you to Rangamati. It is also connected by waterway from Kaptai.",
	openingTime: "9 AM",
	closingTime: "8 PM",
};

const PropertyDescription = () => {
	// const data = useLoaderData();

	// const { category, garage, kitchen, bath, propertySize, rent, room } = data.place;

	return (
		<div>
			<p className="fs-4 pb-2 heading">Description</p>
			<div className="tour-details-info">{data.details}</div>
			<div className="description-list">
				<div>
					<h5>Tour city</h5>
					<span>
						<FaCity className="font-awesome-icon me-1" /> {data.city}
					</span>
				</div>
				<div>
					<h5>Tour area</h5>
					<span>
						<FaMapPin className="font-awesome-icon me-1" /> {data.area}
					</span>
				</div>
				<div>
					<h5>Tour category</h5>
					<span>
						<BiCategory className="font-awesome-icon me-1" /> {data.category}
					</span>
				</div>
				<div>
					<h5>Tour fee</h5>
					<span>
						<HiOutlineCurrencyBangladeshi className="font-awesome-icon me-1" />{" "}
						{data.fee} BDT
					</span>
				</div>
				<div>
					<h5>Transportation</h5>
					<span>
						<FaCarSide className="font-awesome-icon me-1" />{" "}
						{data.transportOptions.join(", ")}
					</span>
				</div>
				<div>
					<h5>Best Month</h5>
					<span>
						<MdDateRange className="font-awesome-icon me-1" /> {data.bestMonthToVisit}
					</span>
				</div>

				<div>
					<h5>Opening time</h5>
					<span>
						<FaCloudSun className="font-awesome-icon me-1" /> {data.openingTime}
					</span>
				</div>
				<div>
					<h5>Closing time</h5>
					<span>
						<MdOutlineNightsStay className="font-awesome-icon me-1" />{" "}
						{data.closingTime}
					</span>
				</div>
				<div>
					<h5>Zip code</h5>
					<span>
						<MdOutlineQrCode className="font-awesome-icon me-1" />
						{data.zipCode}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PropertyDescription;
