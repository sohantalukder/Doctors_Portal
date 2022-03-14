import React from 'react';
import bg from '../../../images/bg.png';
import image from '../../../images/chair.png';
import Calender from '../../Calender/Calender';
const AppointmentHeader = ({ date, setDate }) => {
	const bannerBg = {
		background: `url(${bg})`,
	};
	return (
		<div className="container">
			<div
				className="row align-items-center text-start pb-5 pt-5 sm-pb-3"
				style={bannerBg}>
				<div className="col-md-5 col-sm-12">
					<h1 className="fw-bolder mb-4">Appointment</h1>
					<Calender date={date} setDate={setDate} />
				</div>
				<div className="col-md-7 col-sm-12 ">
					<div className="d-flex justify-content-md-end justify-content-center">
						<img src={image} style={{ width: '80%' }} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentHeader;
