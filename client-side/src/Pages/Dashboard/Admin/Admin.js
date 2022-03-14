import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
const Admin = () => {
	const [email, setEmail] = useState({});
	const [success, setSuccess] = useState(false);
	const { token } = useAuth();
	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};

	const handleLoginSubmit = (e) => {
		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					setEmail('');
					setSuccess(true);
				}
			});
		e.preventDefault();
	};
	return (
		<div className="container h-100 mt-5 mx-auto">
			<div className="card shadow-lg rounded-0">
				<div className="card-body p-5 ">
					<h1 className="fs-4 card-title fw-bold mb-4">Add Admin</h1>
					<form onSubmit={handleLoginSubmit} className="text-start">
						<div className="mb-3 ">
							<label className="mb-2 text-muted" for="email">
								ENTER EMAIL
							</label>
							<input
								onBlur={handleOnBlur}
								type="email"
								className="form-control rounded-0 "
								name="email"
								placeholder="Email"
								required
							/>
						</div>

						<div className=" mb-3 ">
							<button type="submit" className="btn  btn-primary py-2 px-4">
								Add Admin
							</button>
						</div>
					</form>
					{success && (
						<p className="alert alert-success">User Created Successfully</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;
