import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "../../component/Profile/Profile";
import { MdOutlineSecurityUpdateGood, MdLogout } from "react-icons/md";

const NavSection = () => {
	const { user, logOut, loading } = useContext(AuthContext);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((err) => console.error(err));
	};
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src={logo} className="app-logo" alt="logo" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									to="/"
									className="nav-link active nav-style"
									aria-current="page"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/allProperty" className="nav-link nav-style">
									All Properties
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/addProperty" className="nav-link nav-style">
									Add Property
								</Link>
							</li>
						</ul>

						{user?.uid ? (
							<>
								<span className="navbar-text">
									<Link to="/dashboard" className="nav-link nav-style">
										Dashboard
									</Link>
								</span>
								<Dropdown>
									<Dropdown.Toggle variant="light" id="dropdown-basic">
										<img
											className="rounded-circle"
											style={{ height: "30px", width: "30px" }}
											src={user.photoURL}
											alt=""
										/>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<div className="d-flex gap-2 flex-column px-3">
											{loading ? (
												"Loading..."
											) : (
												<>
													<span>{user?.displayName}</span>
													<span>{user?.email}</span>
												</>
											)}
										</div>
										<hr />
										<Dropdown.Item onClick={handleShow}>
											<div className="d-flex align-items-center gap-1">
												<MdOutlineSecurityUpdateGood />
												<span>Update profile</span>
											</div>
										</Dropdown.Item>
										<Dropdown.Item onClick={handleLogOut}>
											<div className="d-flex align-items-center gap-1">
												<MdLogout />
												<span>Logout</span>
											</div>
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								{/* ------------ profile modal here --------- */}
								<Profile
									show={show}
									displayName={user?.displayName}
									email={user?.email}
									handleClose={handleClose}
								/>
							</>
						) : (
							<>
								<span className="navbar-text">
									<Link to="/logIn">
										<button className="nav-button">Login</button>
									</Link>
								</span>
								<span className="navbar-text ms-lg-3 ms-md-3 ms-sm-0">
									<Link to="/signUp">
										<button
											className="nav-button"
											style={{ backgroundColor: "#7065f0", color: "White" }}
										>
											SignUp
										</button>
									</Link>
								</span>
							</>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavSection;
