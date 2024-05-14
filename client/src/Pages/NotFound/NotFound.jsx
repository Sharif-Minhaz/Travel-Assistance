import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<section className="d-flex flex-column gap-3 p-5">
			<h1 className="text-center">404 page not found</h1>
			<div className="text-center">
				<Link to="/" replace>
					<Button variant="primary">Return</Button>
				</Link>
			</div>
		</section>
	);
}
