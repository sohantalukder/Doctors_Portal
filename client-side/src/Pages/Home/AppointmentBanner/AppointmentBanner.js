import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
const appointmentBg = {
	background: `url(${bg})`,
	backgroundColor: 'rgba(58,66,89)',
	backgroundBlendMode: 'darken, luminosity',
	marginTop: 175,
};
const AppointmentBanner = () => {
	return (
		<div className="container">
			<div className="row align-items-center" style={appointmentBg}>
				<div className="col-md-6 col-xs-12 ">
					<img
						src={doctor}
						style={{ marginTop: '-150px', width: '80%' }}
						alt=""
					/>
				</div>
				<div className="col-md-6 col-xs-12 text-white text-start">
					<div>
						<h6
							style={{
								color: '#6ACECE',
								marginBottom: '25px',
								fontSize: '1.6rem',
								letterSpacing: '1px',
								fontWeight: '600',
							}}>
							APPOINTMENT
						</h6>
						<h1
							style={{
								fontSize: '2.8rem',
								fontWeight: '600',
								letterSpacing: '1px',
								marginBottom: '20px',
							}}>
							Make an appointment Today
						</h1>
						<p className="mb-4">
							It is a long established fact that a reader will be distractedby
							the readable content of a page when looking at its
						</p>
						<button
							style={{
								color: '#ffffff',
								background:
									'linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%)',
								border: '0',
								borderRadius: '0',
								padding: '0.5rem 1rem',
								letterSpacing: '0.1rem',
								fontWeight: '600',
							}}>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;
