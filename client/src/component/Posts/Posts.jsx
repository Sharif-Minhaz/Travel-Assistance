import "./Posts.css";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Posts = ({ posts, loading }) => {
	if (loading) {
		return <Loading />;
	}

	return (
		<div className="card-content mt-4">
			{posts?.map((post) => (
				<div style={{ minHeight: "465px" }} className="card" key={post._id}>
					<div className="card-image">
						<img src={post.image} className="card-img-top text-center" alt="..." />
					</div>
					<div className="card-info">
						<p className="fw-bold">{post.title}</p>

						<span>
							<ImLocation2 className="property-des-style" />
							{post.area}, {post.city}
						</span>
						<p> Property Type: {post.category}</p>
						<div className="d-flex justify-content-start gap-4 my-3">
							<span>
								<FaBed className="property-des-style" /> {post.room}
							</span>
							<span>
								<FaBath className="property-des-style" /> {post.bath}
							</span>
							<span>
								<FaSquare className="property-des-style" /> {post.propertySize}{" "}
								sqft.
							</span>
						</div>
						<div className="mt-2">
							<span>
								Available From: <b className="property-des-style">{post.month}</b>
							</span>
						</div>
						<div className="mt-2">
							<span>
								Rent: <span className="property-des-style">{post.rent}</span> TK
							</span>
						</div>
						<div className="text-center mt-4 mb-2">
							<Link to={`/details/${post._id}`} className="details">
								View Details
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;
