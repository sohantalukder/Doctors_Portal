import React, { useState } from 'react';
import AvailableAppointment from './Booking/Booking';

const AvailableAppointments = ({ date }) => {
	let { day, month, year } = date;
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

	const appointments = [
		{ id: 1, name: 'Teeth Orthodontics', time: '8.00 AM - 9.00 AM', space: 4 },
		{
			id: 2,
			name: 'Cosmetic Dentistry',
			time: '10.05 AM - 11.30 AM',
			space: 15,
		},
		{ id: 3, name: 'Teeth Cleaning ', time: '5.00 PM - 6.30 PM', space: 10 },
		{ id: 4, name: 'Cavity Protection', time: '7.00 PM - 8.30 PM', space: 12 },
		{ id: 5, name: 'Teeth Orthodontics', time: '8.00 AM - 9.00 AM', space: 9 },
		{
			id: 6,
			name: 'Cosmetic Dentistry',
			time: '10.00 AM - 11.00 AM',
			space: 7,
		},
	];

	const [bookingSuccess, setBookingSuccess] = useState(false);
	return (
		<div>
			<h1
				style={{
					fontWeight: '600',
					margin: '40px 0',
					color: '#1CC7C1',
					fontSize: '2rem',
				}}>
				Available Appointments {day} {monthName} {year}
			</h1>
			{bookingSuccess && (
				<p className="alert alert-success">Appointment Booking Successfully</p>
			)}
			<div className="row" style={{ marginTop: '0' }}>
				{appointments.map((appoint) => (
					<AvailableAppointment
						date={date}
						key={appoint.id}
						appoint={appoint}
						setBookingSuccess={setBookingSuccess}
					/>
				))}
			</div>
		</div>
	);
};

export default AvailableAppointments;
