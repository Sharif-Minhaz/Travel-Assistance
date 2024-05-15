import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/Button";

export default function Reviews() {
	const [value, setValue] = useState(3);

	const ratingChanged = (newRating) => {
		setValue(newRating);
	};

	return (
		<div>
			<p className="fs-4 border-bottom pb-2">Your Review</p>
			<div style={{ marginTop: "-10px" }}>
				<ReactStars
					count={5}
					value={value}
					onChange={ratingChanged}
					size={35}
					activeColor="#ffd700"
				/>
			</div>
			<FloatingLabel
				className="mt-2 mb-3"
				controlId="floatingTextarea2"
				label="Review Here..."
			>
				<Form.Control
					as="textarea"
					placeholder="Leave a review here"
					style={{ height: "100px" }}
				/>
			</FloatingLabel>
			<Button variant="info" className="text-light">
				Submit
			</Button>
		</div>
	);
}
