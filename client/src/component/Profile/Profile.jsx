import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../contexts/AuthProvider";

function Profile({ show, handleClose, email, displayName }) {
	const { user, updateUser } = useContext(AuthContext);

	// State to manage input values
	const [profileInfo, setProfileInfo] = useState({
		displayName: displayName,
		photoURL: user?.photoURL || "https://randomuser.me/api/portraits/lego/2.jpg",
		image: null,
	});

	// Function to handle input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "image") {
			return setProfileInfo((prevInfo) => ({ ...prevInfo, image: e.target?.files[0] }));
		}
		setProfileInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	};

	const updateProfileInfo = () => {
		const formData = new FormData();
		formData.append("image", profileInfo.image);

		const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_IMGBB_API}`;

		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imageData) => {
				setProfileInfo((prevInfo) => ({ ...prevInfo, photoURL: imageData?.data.url }));
				updateUser({ ...profileInfo, photoURL: imageData?.data.url });
			})
			.catch((err) => console.error(err));

		handleClose(); // Close modal after updating
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Update profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formDisplayName">
							<Form.Label>Display name</Form.Label>
							<Form.Control
								name="displayName"
								value={profileInfo.displayName}
								type="text"
								placeholder="John Doe"
								autoFocus
								required
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								name="email"
								value={email}
								type="email"
								required
								disabled
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formEmail">
							<Form.Label>Profile picture</Form.Label>
							<Form.Control
								name="image"
								type="file"
								onChange={handleChange}
								accept="image/*"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={updateProfileInfo}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Profile;
