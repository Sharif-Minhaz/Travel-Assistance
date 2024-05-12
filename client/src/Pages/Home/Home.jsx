import "./Home.css";
import { useEffect, useState } from "react";
import Banner from "../../component/Banner/Banner";
import Hero from "../../component/Hero/Hero";
import Category from "../../component/Category/Category";
import axios from "../../lib/axios";
import TopListingProperty from "../../component/TopListingProperty/TopListingProperty";

const Home = () => {
	const [category, setCategory] = useState([]);
	const [add, setAdd] = useState([]);
	const [totalAdd, setTotalAdd] = useState(0);

	useEffect(() => {
		fetch("category.json")
			.then((res) => res.json())
			.then((data) => setCategory(data));
	}, []);

	useEffect(() => {
		axios.get(`/products/allProducts`).then((res) => {
			setAdd(res.data?.restaurants);
		});
	}, []);

	return (
		<section>
			<Banner />
			<Hero />
			<section className="category-section h-auto w-auto py-5">
				<div className="container mt-5 mt-lg-0 mt-md-0">
					<div className="category-title mt-sm-5 mt-lg-0 mt-md-0">
						<p>Top Categories</p>
						<span>
							{category.length} categories {add.length} ads
						</span>
					</div>
					<div className="category">
						{category?.map((categ) => (
							<Category
								// icon={categ.category_icon}s
								key={categ.id}
								// title={categ.title}
								// adds={categ.adds}
								categ={categ}
								setTotalAdd={setTotalAdd}
								totalAdd={totalAdd}
							/>
						))}
					</div>
				</div>
			</section>
			<TopListingProperty />
		</section>
	);
};

export default Home;
