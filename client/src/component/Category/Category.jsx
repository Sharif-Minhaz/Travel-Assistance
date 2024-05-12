import "./Category.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../lib/axios";
import Loading from "../../Shared/Loading/Loading";

const Category = ({ categ, setTotalAdd, totalAdd }) => {
	const { title, icon } = categ;
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [add, setAdd] = useState();

	const navigate = useNavigate();

	const handleCategory = () => {
		return navigate("/homeSortProperty", { state: { data: { title } } });
	};

	useEffect(() => {
		function fetchData() {
			try {
				setLoading(true);
				axios.get(`/products/categoryWiseData?title=${title}`).then((res) => {
					setAdd(res.data?.restaurants?.length);
					setTotalAdd(totalAdd + res.data?.restaurants?.length);
				});
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [title]);

	if (loading) return <Loading />;

	if (error) return <p>Error occurred: {error.message}</p>;

	return (
		<div className="category-item">
			<button className="bg-white" onClick={handleCategory}>
				<img src={icon} alt="" />
				<p>{title}</p>
				<span>{add} adds</span>
			</button>
		</div>
	);
};
export default Category;
