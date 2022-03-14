import React from 'react';
import bg from '../../../images/appointment-bg.png';
import './Contact.css';
const ContactUs = () => {
	const contactBg = {
		background: `url(${bg})`,
		backgroundColor: 'rgba(58,66,89)',
		backgroundBlendMode: 'darken, luminosity',
		marginTop: 50,
	};
	return (
		<div style={contactBg}>
			<div className="container ">
				<div className="py-5">
					<h5
						className="d-block"
						style={{ fontWeight: '700', color: '#6ACECE' }}>
						CONTACT US
					</h5>
					<h1 className="d-block fw-bolder text-white mb-5">
						Always Connect with us
					</h1>
					<div style={{ width: '70%', margin: 'auto' }}>
						<form>
							<div className="mb-3">
								<input
									type="email"
									className="form-control  rounded-0"
									id="exampleInputEmail1"
									placeholder="Email Address*"
									required
								/>
							</div>
							<div className="mb-3">
								<input
									type="text"
									className="form-control  rounded-0"
									id="exampleInputPassword1"
									placeholder="Subject*"
									required
								/>
							</div>
							<div className="mb-3">
								<textarea
									type="textarea"
									className="form-control  rounded-0 textarea"
									id="exampleInputPassword1 "
									placeholder="Your Message*"
									required
								/>
							</div>

							<button
								type="submit"
								style={{
									color: '#ffffff',
									background:
										'linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%)',
									border: '0',
									borderRadius: '0',
									padding: '0.5rem 2rem',
									letterSpacing: '0.1rem',
									fontWeight: '600',
								}}>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
