import React from 'react';
import Cavity from '../../../images/cavity.png';
import Fluride from '../../../images/fluoride.png';
import Whitening from '../../../images/whitening.png';
import SingleServices from './SingleServices/SingleServices';
const ourServices = [
	{
		name: 'Fluroide Treatment',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry standard dummy text ever.',
		image: Fluride,
	},
	{
		name: 'Cavity Filling',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry standard dummy text ever.',
		image: Cavity,
	},
	{
		name: 'Teath Whitening',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry standard dummy text ever.',
		image: Whitening,
	},
];

const Services = () => {
	return (
		<div className="container mb-5" style={{ marginTop: '100px' }}>
			<div className="mb-5">
				<h4 style={{ color: '#5FC7C7', fontWeight: '700' }}>OUR SERVICES</h4>
				<h1 className="mt-2 " style={{ color: '#203047', fontWeight: '600' }}>
					Services We Provide
				</h1>
			</div>
			<div className="row align-items-center"></div>
			<div className="row g-5">
				{ourServices.map((service) => (
					<SingleServices key={service.name} service={service}></SingleServices>
				))}
			</div>
		</div>
	);
};

export default Services;
