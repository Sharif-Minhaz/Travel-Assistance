import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function OrderInformation() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		country: "",
		time: "",
		dateFrom: "",
		numberOfGuest: "",
		numberOfChildren: "",
		paidAmount: 0,
		transactionId: "",
		checkMeOut: false,
		package: "",
		transportation: "",
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.checkMeOut) {
			console.log(formData);
		} else {
			alert("Check out first");
		}
	};

	return (
		<div className="order-info">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						name="name"
						required
						placeholder="Your name"
						value={formData.name}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						required
						placeholder="Enter email"
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="country">
					<Form.Label>Country</Form.Label>
					<Form.Control
						type="text"
						name="country"
						required
						placeholder="Country"
						value={formData.country}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="time">
					<Form.Label>Time</Form.Label>
					<Form.Control
						type="time"
						name="time"
						required
						value={formData.time}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="dateFrom">
					<Form.Label>Date From</Form.Label>
					<Form.Control
						type="date"
						name="dateFrom"
						required
						value={formData.dateFrom}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="numberOfGuest">
					<Form.Label>Number of Guests</Form.Label>
					<Form.Control
						type="number"
						name="numberOfGuest"
						required
						placeholder="Number of Guests"
						value={formData.numberOfGuest}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="numberOfChildren">
					<Form.Label>Number of Children</Form.Label>
					<Form.Control
						type="number"
						name="numberOfChildren"
						required
						placeholder="Number of Children"
						value={formData.numberOfChildren}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="package">
					<Form.Label>Package</Form.Label>
					<Form.Control
						as="select"
						name="package"
						value={formData.package}
						onChange={handleChange}
					>
						<option value="">Select a package</option>
						<option value="1.5">Gold (1.5x)</option>
						<option value="1.3">Silver (1.3x)</option>
						<option value="1.1">Bronze (1.1x)</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="transportation">
					<Form.Label>Transportation</Form.Label>
					<Form.Control
						as="select"
						name="transportation"
						value={formData.transportation}
						onChange={handleChange}
					>
						<option value="">Select a transportation</option>
						<option value="500">Car (+500)</option>
						<option value="300">Bike (+300)</option>
						<option value="100">Bus (+100)</option>
					</Form.Control>
				</Form.Group>

				<Form.Group className="mb-3" controlId="paid">
					<Form.Label>Paid Amount</Form.Label>
					<Form.Control
						type="number"
						name="paidAmount"
						label="Paid"
						required
						placeholder="Total amount paid"
						value={formData.paidAmount}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="transactionId">
					<Form.Label>Transaction ID</Form.Label>
					<Form.Control
						type="text"
						name="transactionId"
						required
						placeholder="Transaction ID"
						value={formData.transactionId}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="checkMeOut">
					<Form.Check
						type="checkbox"
						name="checkMeOut"
						required
						label="Check me out"
						checked={formData.checkMeOut}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Book Now
				</Button>
			</Form>
		</div>
	);
}
