import React from 'react';
import doctor from '../../../images/doctor-small.png';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
	const doctors = [
		{
			name: 'Dr. Saudi Ahmed',
			number: '01865748726',
			image: doctor,
		},
		{
			name: 'Dr. Saudi Ahmed',
			number: '01865748728',
			image: doctor,
		},
		{
			name: 'Dr. Saudi Ahmed',
			number: '01765748726',
			image: doctor,
		},
	];

	return (
		<div style={{ marginTop: '80px' }} className="container">
			<h5 className="d-block" style={{ fontWeight: '700', color: '#6ACECE' }}>
				Our Doctors
			</h5>
			<div className="row g-5  mt-1 ">
				{doctors.map((doctor) => (
					<Doctor key={doctor.number} doctor={doctor} />
				))}
			</div>
		</div>
	);
};

export default Doctors;
