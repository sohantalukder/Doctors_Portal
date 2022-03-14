import React from 'react';

const SingleTestimonial = (props) => {
	const { name, comment, image, location } = props.testimonial;
	return (
		<div className="col-md-4  col-sm-12 ">
			<div className="border rounded p-5 shadow-sm">
				<div className=" mb-4">
					<p style={{ color: '#595762', fontSize: '0.9rem' }}>{comment}</p>
				</div>
				<div className="row align-items-center">
					<div className="col-4 p-0">
						<img src={image} style={{ width: '60%' }} alt="" />
					</div>
					<div className="col-8  text-start p-0">
						<p className="mb-0 lh-base fw-bold">{name}</p>
						<p className="mb-0">{location}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleTestimonial;
