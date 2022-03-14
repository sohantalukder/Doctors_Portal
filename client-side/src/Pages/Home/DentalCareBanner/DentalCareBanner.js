import React from 'react';
import dentalImage from '../../../images/treatment.png';
const DentalCareBanner = () => {
	return (
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-5 col-sm-12 ">
					<div className="d-flex justify-content-md-start justify-content-center">
						<img
							src={dentalImage}
							style={{ width: '80%', height: '80%' }}
							alt=""
						/>
					</div>
				</div>
				<div className="col-md-7 col-sm-12 text-start">
					<h1
						style={{
							fontWeight: '600',
							fontSize: '2rem',
							marginBottom: '20px',
						}}>
						Exceptional Dental Care, <br /> on Your Terms
					</h1>
					<p
						style={{
							fontSize: '0.9rem',
							color: '#B2B2B2',
							lineHeight: '1.5rem',
							marginBottom: '25px',
						}}>
						Lorem ipsum dolor sit amet consectetur adipiscing elit, venenatis
						magnis pretium conubia facilisi cum fermentum dui, faucibus et
						curabitur posuere eu lectus. Nibh mus ut facilisi ligula ac per
						commodo eu congue consequat semper mauris eros, curae leo maecenas
						sociosqu massa blandit fames orci tempor sapien pellentesque tempus.
						Viverra felis orci sodales per fermentum commodo tempor vitae,
						iaculis odio inceptos vel placerat donec netus interdum, purus
						dictumst himenaeos lacus congue dui eleifend.
						<br />
						<br />
						Luctus netus elementum dignissim morbi cursus venenatis varius id
						lacinia, molestie tincidunt lectus mi tempus accumsan sociis auctor,
						nisi nisl non magna quisque nascetur quis senectus. Nullam porta
						convallis eleifend maecenas luctus nec per nascetur, montes vel
						tempor lacus tellus massa at sodales class, suscipit morbi donec
						ultricies sem rutrum hac. Elementum ad pellentesque dui viverra cum
						velit gravida pulvinar, ornare sapien montes ligula vel augue
						sociosqu curae nulla, lacinia venenatis platea sed metus aptent
						dapibus.
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
			</div>
		</div>
	);
};

export default DentalCareBanner;
