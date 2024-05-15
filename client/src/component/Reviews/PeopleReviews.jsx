// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import { MdStar } from "react-icons/md";

const reviews = [
	{
		reviewedBy: {
			displayName: "David Tade",
			photoURL: "https://randomuser.me/api/portraits/men/1.jpg",
		},
		text: "Very Good products, very good service of staff. It's very Beautiful and very good. Good service. Thanks All",
		rating: 5,
	},
	{
		reviewedBy: {
			displayName: "Rakibul Islam",
			photoURL: "https://randomuser.me/api/portraits/men/4.jpg",
		},
		text: "Very Good products, very good service of staff. It's very Beautiful and very good. Good service. Thanks All",
		rating: 5,
	},
	{
		reviewedBy: {
			displayName: "Faysal Ahmed",
			photoURL: "https://randomuser.me/api/portraits/men/3.jpg",
		},
		text: "Very Good products, very good service of staff. It's very Beautiful and very good. Good service. Thanks All",
		rating: 5,
	},
];

export default function PeopleReviews() {
	return (
		<section>
			<p className="fs-4 pb-2 heading">Top Reviews For Treker</p>
			<Swiper
				autoplay={{
					delay: 4500,
					disableOnInteraction: true,
				}}
				loop={true}
				centeredSlides={true}
				navigation={true}
				modules={[Autoplay, Navigation]}
				slidesPerView={1}
			>
				{reviews.map((review, index) => (
					<SwiperSlide key={index} className="review-rating">
						<img
							className="quota"
							src="/quotes.svg"
							alt={review.reviewedBy?.displayName}
						/>
						<h5 className="mt-2">
							{review.reviewedBy?.displayName} (
							<span className="d-inline-flex align-items-center">
								{review.rating}
								<MdStar color="#ffd700" />
							</span>
							)
						</h5>
						<p className="review-text">"{review.text}"</p>
						<img
							src={review.reviewedBy?.photoURL}
							width={60}
							height={60}
							className="rounded-circle"
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
