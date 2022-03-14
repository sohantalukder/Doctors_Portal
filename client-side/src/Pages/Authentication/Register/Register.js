import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import doctor from '../../../images/doctor.jpg';
// import './Login.css';

const Register = () => {
	const { user, registerUser, isLoading, authError, signInWithGoogle } =
		useAuth();
	const [loginData, setLoginData] = useState({});
	const location = useLocation();
	const history = useHistory();

	const [error, setError] = useState('');
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		setLoginData(newLoginData);
	};
	const handleLogin = (e) => {
		if (loginData.password !== loginData.password2) {
			setError("Your Password Didn't Match!");
		}
		registerUser(
			loginData.email,
			loginData.password,
			loginData.name,
			history,
			location
		);

		e.preventDefault();
	};
	const handleGoogleSignIn = () => {
		signInWithGoogle(location, history);
	};
	return (
		<div className="d-flex align-items-center min-vh-100 py-3 py-md-0 text-start">
			<div className="container">
				<div className="card rounded-0 login-card">
					<div className="row no-gutters">
						<div className="col-md-5 position-relative">
							<img src={doctor} alt="login" className="login-card-img" />
						</div>
						<div className="col-md-7">
							<div className="card-body">
								<p className="login-card-description fw-bolder">Sign In With</p>
								<button
									onClick={handleGoogleSignIn}
									style={{ border: '1px solid #000000', borderRadius: '0px' }}
									className="btn mb-3"
									type="button">
									<FcGoogle style={{ fontSize: '1.4rem' }} /> Sign In With
									Google
								</button>
								<p className="">Or</p>
								{!isLoading && (
									<form onSubmit={handleLogin}>
										<div className="form-group">
											<label className="sr-only">Name</label>
											<input
												type="text"
												name="name"
												id="email"
												onChange={handleOnChange}
												className="form-control"
												placeholder="Name"
											/>
										</div>
										<div className="form-group">
											<label className="sr-only">Email</label>
											<input
												type="email"
												name="email"
												id="email"
												onChange={handleOnChange}
												className="form-control"
												placeholder="Email address"
											/>
										</div>
										<div className="form-group mb-4">
											<label className="sr-only">Password</label>
											<input
												type="password"
												name="password"
												onChange={handleOnChange}
												id="password"
												className="form-control"
												placeholder="***********"
											/>
										</div>
										<div className="form-group mb-4">
											<label className="sr-only">Confirm Password</label>
											<input
												type="password"
												name="password2"
												onChange={handleOnChange}
												id="password"
												className="form-control"
												placeholder="***********"
											/>
										</div>
										{error && <p className="alert alert-danger">{error}</p>}
										{authError && (
											<p className="alert alert-danger">{authError}</p>
										)}

										<button
											name="login"
											id="login"
											className="btn btn-block login-btn mb-4"
											type="submit"
											style={{
												color: '#ffffff',
												border:
													'1px linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%) ',
												background:
													'linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%)',

												borderRadius: '0',
												padding: '0.75rem 2rem',
												letterSpacing: '0.1rem',
												fontWeight: '600',
											}}>
											Register
										</button>
									</form>
								)}
								{isLoading && (
									<div className="d-flex justify-content-center mt-100">
										<div className="spinner"></div>
									</div>
								)}
								{user?.email && (
									<p className="alert alert-success">
										User Created Successfully
									</p>
								)}
								<a href="#!" className="forgot-password-link">
									Forgot password?
								</a>
								<p className="login-card-footer-text">
									I have an account?{' '}
									<Link to="/login" className="text-reset">
										Log In
									</Link>
								</p>
								<nav className="login-card-footer-nav">
									<p>
										<a href="#!">Terms of use.</a>{' '}
										<a href="#!">Privacy policy</a>
									</p>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
