import React from 'react';
import './SingleService.css';
const SingleServices = (props) => {
	const { name, description, image } = props.service;
	return (
		<div className="col-md-4 col-12 mt-4">
			<div>
				<div className="px-5 py-4 single-service">
					<img className="img-responsive" src={image} alt="images" />

					<h5 className=" mt-4 mb-3">{name}</h5>
					<p style={{ color: '#B4B4B4' }}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleServices;
