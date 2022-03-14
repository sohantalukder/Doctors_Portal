import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
const BookingModals = (props) => {
	const { time, name } = props.appoint;
	const { user } = useAuth();
	let { day, month, year } = props.date;
	const setBookingSuccess = props.setBookingSuccess;

	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let monthName = months[month - 1];
	let newDate = [day, monthName, year];
	const initialInfo = {
		patientName: user.displayName,
		email: user.email,
		phone: '',
	};
	const [bookingInfo, setBookingInfo] = useState(initialInfo);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newInfo = { ...bookingInfo };
		newInfo[field] = value;
		setBookingInfo(newInfo);
	};

	const handleBookingSubmit = (e) => {
		// Collect data
		const appointment = {
			...bookingInfo,
			time,
			serviceName: name,
			date: newDate,
		};
		// send to the server
		fetch('http://localhost:5000/appointments', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(appointment),
		})
			.then((res) => res.json())
			.then((data) => {
				setBookingSuccess(true);
				props.onHide();
			});
		e.preventDefault();
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<div className="p-lg-5 p-md-4 p-sm-3 ">
				<Modal.Body>
					<h4
						className="text-center mb-4 fw-bolder"
						style={{ color: '#1CC7C1' }}>
						{name}
					</h4>
					<form onSubmit={handleBookingSubmit}>
						<div className="mb-3">
							<input
								type="text"
								className="form-control  rounded-0"
								disabled
								value={time}
								required
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								onBlur={handleOnBlur}
								name="patientName"
								className="form-control  rounded-0"
								defaultValue={user.displayName}
								required
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="phone"
								onBlur={handleOnBlur}
								className="form-control  rounded-0"
								placeholder="Phone Number*"
								required
							/>
						</div>
						<div className="mb-3">
							<input
								type="email"
								name="email"
								onBlur={handleOnBlur}
								className="form-control  rounded-0"
								defaultValue={user.email}
								required
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								className="form-control  rounded-0 "
								value={newDate}
								required
								disabled
							/>
						</div>

						<button
							className="mt-3"
							type="submit"
							style={{
								color: '#ffffff',
								background:
									'linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%)',
								border: '0',
								borderRadius: '0',
								padding: '0.5rem 2rem',
								letterSpacing: '0.1rem',
								fontWeight: '600',
							}}>
							Submit
						</button>
					</form>
				</Modal.Body>
			</div>
		</Modal>
	);
};

export default BookingModals;
