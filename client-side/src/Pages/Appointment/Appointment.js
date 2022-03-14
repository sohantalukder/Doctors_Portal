import React from 'react';
import Footer from '../Home/Footer/Footer';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<div>
			<div className="container">
				<AppointmentHeader date={date} setDate={setDate} />
				<AvailableAppointments date={date} />
			</div>
			<Footer />
		</div>
	);
};

export default Appointment;
