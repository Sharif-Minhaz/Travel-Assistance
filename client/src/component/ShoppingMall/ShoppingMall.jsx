import "./ShoppingMall.css";
import { shoppingMallData } from "../../constants";

export default function ShoppingMall() {
	return (
		<section>
			<p className="fs-4 pb-2 heading">Available Shopping mall</p>
			<div className="available-packages">
				{shoppingMallData.map((mall) => (
					<article key={mall._id} className="shadow-sm shopping-mall-container">
						<img src={mall.image} alt="" />
						<div className="shopping-mall-body">
							<h4 className="mt-2 mb-3">
								<span className="text-uppercase">{mall.name} </span>
							</h4>
							<p>Address: {mall.address}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
