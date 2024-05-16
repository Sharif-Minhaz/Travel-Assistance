import "./../ShoppingMall/ShoppingMall.css";
import { eventData } from "../../constants";

export default function Events() {
	return (
		<section>
			<p className="fs-4 pb-2 heading">Available Events</p>
			<div className="available-packages">
				{eventData.map((event) => (
					<article key={event._id} className="shadow-sm shopping-mall-container">
						<div>
							<img src={event.image} alt="" />
							<div className="description">
								<small>{event.description}</small>
							</div>
						</div>
						<div className="shopping-mall-body">
							<h4 className="mt-2 mb-3">
								<span className="text-uppercase">{event.name} </span>
							</h4>
							<p>Date: {event.date.toUTCString()}</p>
							<p>Location: {event.location}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
