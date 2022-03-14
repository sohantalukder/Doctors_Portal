import React from 'react';
import munim from '../../../images/people-1.png';
import ahmeda from '../../../images/people-2.png';
import hamida from '../../../images/people-3.png';
import SingleTestimonial from './SingleTestimonial/SingleTestimonial';
const Testimonial = () => {
	const testimonials = [
		{
			name: 'Munim Sharriar',
			comment:
				'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content.',
			image: munim,
			location: 'Mirpur, Dhaka',
		},
		{
			name: 'Ahmeda Khanum',
			comment:
				'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content.',
			image: ahmeda,
			location: 'Uttara, Dhaka',
		},
		{
			name: 'Hamida Binte Alam',
			comment:
				'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content.',
			image: hamida,
			location: 'Dhanmondi, Dhaka',
		},
	];
	return (
		<div style={{ marginTop: '70px' }} className="container">
			<div>
				<h5
					className="d-block text-start"
					style={{ fontWeight: '700', color: '#6ACECE' }}>
					TESTIMONIAL
				</h5>
				<h1 className="d-block text-start fw-bolder">
					Whats Our Patients Says
				</h1>
				<div className="row g-5 mt-1 mb-5">
					{testimonials.map((testimonial) => (
						<SingleTestimonial
							key={testimonial.name}
							testimonial={testimonial}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
