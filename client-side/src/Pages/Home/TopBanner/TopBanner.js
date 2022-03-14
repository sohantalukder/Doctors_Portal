import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdLocationOn, MdPhoneAndroid } from 'react-icons/md';
import bg from '../../../images/bg.png';
import image from '../../../images/chair.png';

const TopBanner = () => {
	const bannerBg = {
		background: `url(${bg})`,
		height: 500,
	};
	return (
		<div className="container">
			<div className="row align-items-center text-start pb-5" style={bannerBg}>
				<div className="col-md-5 col-sm-12">
					<h1 style={{ fontWeight: '700', fontSize: '40px' }}>
						Your New Smile Start Here
					</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry’s standard dummy text
						ever since the
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
						GET APPOINTMENT
					</button>
				</div>
				<div className="col-md-7 col-sm-12 ">
					<div className="d-flex justify-content-md-end justify-content-center">
						<img src={image} style={{ width: '80%' }} alt="" />
					</div>
				</div>
			</div>
			<div className="row g-4 text-start" style={{ marginTop: '-50px' }}>
				<div className="col-md-4 col-sm-12">
					<div
						className=" d-flex align-items-center"
						style={{
							background: '#1CC7C1',
							color: '#ffffff',
							padding: '15px',
						}}>
						<AiOutlineClockCircle
							style={{ fontSize: '60px', marginRight: '20px' }}
						/>
						<div>
							<h6>Opening Hours</h6>
							<p className="m-0">
								Saturday to Thursday : 9 AM to 10 PM
								<br /> Friday : 8 AM to 10 PM
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div
						className=" d-flex align-items-center"
						style={{
							background: '#3A4256',
							color: '#ffffff',
							padding: '15px',
						}}>
						<MdLocationOn style={{ fontSize: '60px', marginRight: '20px' }} />
						<div>
							<h6>Visit our location</h6>
							<p className="m-0">
								Section-2, Mirpur <br />
								Dhaka, Bangladesh
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-sm-12">
					<div
						className=" d-flex align-items-center"
						style={{
							background: '#1CC7C1',
							color: '#ffffff',
							padding: '15px',
						}}>
						<MdPhoneAndroid style={{ fontSize: '60px', marginRight: '20px' }} />
						<div>
							<h6>Contact us now</h6>
							<p className="m-0">+880173100187</p>
							<p className="m-0">+880173100181</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBanner;
