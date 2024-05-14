import "./Category.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../lib/axios";
import Loading from "../../Shared/Loading/Loading";

const Category = ({ categ, setTotalAdd, totalAdd }) => {
	const { name, image } = categ;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [add, setAdd] = useState();

	const navigate = useNavigate();

	const handleCategory = () => {
		return navigate("/homeSortProperty", { state: { data: { name } } });
	};

	useEffect(() => {
		function fetchData() {
			try {
				setLoading(true);
				axios.get(`/products/categoryWiseData?title=${name}`).then((res) => {
					setAdd(res.data?.places?.length);
					setTotalAdd(totalAdd + res.data?.places?.length);
				});
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name]);

	if (loading) return <Loading />;

	if (error) return <p>Error occurred: {error.message}</p>;

	return (
		<div className="category-item" onClick={handleCategory}>
			<button className="bg-white">
				<img className="category-img" src={image} alt="" />
				<p>{name}</p>
				<span>{add} venues</span>
			</button>
		</div>
	);
};
export default Category;
