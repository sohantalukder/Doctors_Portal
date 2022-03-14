import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
const Doctor = (props) => {
	const { name, image, number } = props.doctor;
	return (
		<div className="col-md-4 col-sm-12">
			<div className="p-3">
				<img src={image} className="img-fluid" alt="" />
				<div className="mt-4">
					<h6 className="fw-bold">{name}</h6>
					<p>
						<BsTelephoneFill style={{ color: '#5FC7C7' }} />{' '}
						<span style={{ color: '#B3B2B5' }}>{number}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Doctor;
