import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './AppointmentView.css';

const AppointmentView = ({ date }) => {
	const { user, token } = useAuth();
	const [appointments, setAppointments] = useState([]);

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
	let monthName = months[date.month - 1];

	useEffect(() => {
		const url = `http://localhost:5000/appointments?email=${user.email}&day=${date.day}&month=${monthName}&year=${date.year}`;
		fetch(url, { headers: { authorization: `Bearer ${token}` } })
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, [token, user.email, date.day, monthName, date.year]);
	return (
		<div className="col-md-12">
			<div className="shadow p-3">
				<div className="d-flex justify-content-between">
					<h4
						className="text-start mb-4"
						style={{
							color: ' #1CC7C1',
							marginBottom: '25px',
							fontSize: '1.2rem',
							letterSpacing: '1px',
							fontWeight: '600',
						}}>
						Appointments
					</h4>
					<h4
						style={{
							color: ' #8B8888',
							marginBottom: '25px',
							fontSize: '1.2rem',
							letterSpacing: '1px',
							fontWeight: '600',
						}}
						className="text-end">
						01 Feb, 2020
					</h4>
				</div>
				<div className="table-wrap">
					<table className="table">
						<thead className="thead-primary">
							<tr>
								<th>Name</th>
								<th>Schedule</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{appointments.map((row) => (
								<tr key={row._id}>
									<td>{row.patientName}</td>
									<td>{row.time}</td>
									<td>
										<Link to="/appointmentsDetails" className="btn btn-primary">
											View
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AppointmentView;
