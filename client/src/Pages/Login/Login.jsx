import "./Login.css";
import loginBanner from "../../images/login-banner.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
	const [show, setShow] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { signIn, loginInWithGoogle } = useContext(AuthContext);
	const [loginError, setLoginError] = useState("");
	// const [loginUserEmail, setLoginUserEmail] = useState("");

	useTitle("Log in");

	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || "/";

	const googleProvider = new GoogleAuthProvider();

	const googleSignIn = () => {
		loginInWithGoogle(googleProvider)
			.then((result) => {
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleLogin = (data) => {
		setLoginError("");
		signIn(data.email, data.password)
			.then((result) => {
				navigate(from, { replace: true });
				// setLoginUserEmail(data.email);
			})
			.catch((error) => {
				console.error(error.message);
				setLoginError(error.message);
			});
	};

	return (
		<section>
			<div className="login-section container mt-2">
				<div className="row align-content-center">
					<div className="col-md-7 col-lg-7 col-sm-12 image-container text-center">
						<img src={loginBanner} alt="" />
					</div>
					<div className="col-md-5 col-lg-5 col-sm-12 p-2 ">
						<div className="p-4 login-Form text-center mt-md-0 mt-lg-0 mt-sm-5">
							<div className="login-heading">
								<h4 className="fw-bold me-3 text-start">Welcome to RentUs</h4>
								<p>
									Don't have an account? <Link to="/signUp">SignUp</Link>
								</p>
							</div>
							<div className="text-center">
								<h3 className="fw-bolder">Login Now</h3>
							</div>
							<div className="d-flex px-3 my-4 w-100 justify-content-center">
								<button className="px-3 py-2 w-100 rounded" onClick={googleSignIn}>
									<FcGoogle className="me-2 " />
									Login with Google
								</button>
							</div>
							<form onSubmit={handleSubmit(handleLogin)}>
								<div className="m-3">
									<label
										htmlFor="exampleFormControlInput1"
										className="form-label float-start"
									>
										Email address
									</label>
									<input
										{...register("email", { required: true })}
										type="email"
										className="form-control"
										id="exampleFormControlInput1"
										placeholder="name@example.com"
									/>
									<label
										htmlFor="inputPassword"
										className="form-label float-start mt-2"
									>
										Password
									</label>
									<input
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 6,
												message: "Password must be 6 characters or longer",
											},
										})}
										type={show ? "text" : "password"}
										className="form-control"
										placeholder="Enter password"
										id="inputPassword"
									/>
									{errors.password && (
										<p className="text-danger">{errors.password?.message}</p>
									)}
									<div>
										<input
											onClick={() => setShow(!show)}
											id="show"
											type="checkbox"
											className="my-3"
										/>
										<label className="ms-1 d-inline-block" htmlFor="show">
											Show Password
										</label>
									</div>
								</div>
								{loginError && <p>{loginError.toString()}</p>}
								<input className="login-btn mb-5" value="LOGIN" type="submit" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
