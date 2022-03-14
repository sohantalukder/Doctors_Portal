import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg from '../../../images/footer-bg.png';
import './Footer.css';
const Footer = () => {
	const footerBg = {
		background: `url(${bg})`,
		backgroundRepeat: 'no-repeat',
		marginTop: 100,
		marginBottom: 76,
	};
	return (
		<div style={footerBg} className="footer">
			<div style={{ maxWidth: '90%', margin: 'auto' }}>
				<div className="row g-5 text-start">
					<div className="col-md-3 col-sm-6 col-xs-12">
						<h6 className="footer_h6" style={{ visibility: 'hidden' }}>
							1
						</h6>

						<ul>
							<li>
								<Link to="/emergencyDental" className="footer_link">
									Emergency Dental Care
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
							<li>
								<Link to="/treatment" className="footer_link">
									Treatment of Personal Diseases
								</Link>
							</li>
							<li>
								<Link to="toothExtraction" className="footer_link">
									Tooth Extraction
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-12">
						<h6 className="footer_h6">Services</h6>

						<ul>
							<li>
								<Link to="/emergencyDental" className="footer_link">
									Emergency Dental Care
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
							<li>
								<Link to="/treatment" className="footer_link">
									Treatment of Personal Diseases
								</Link>
							</li>
							<li>
								<Link to="toothExtraction" className="footer_link">
									Tooth Extraction
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-12">
						<h6 className="footer_h6">Oral Health</h6>

						<ul>
							<li>
								<Link to="/emergencyDental" className="footer_link">
									Emergency Dental Care
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
							<li>
								<Link to="/treatment" className="footer_link">
									Treatment of Personal Diseases
								</Link>
							</li>
							<li>
								<Link to="toothExtraction" className="footer_link">
									Tooth Extraction
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
							<li>
								<Link to="/checkUp" className="footer_link">
									Check Up
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-6 col-xs-12">
						<h6 className="footer_h6">Our Address</h6>

						<ul>
							<li>
								<p className="mb-0">Hose# 17, Block# Z, Road# 112</p>
								<p>Mirpur, Dhaka</p>
							</li>
							<li className="mt-4 mb-5">
								<Link to="/facebook" className="footer_icon active">
									<FaFacebookF />
								</Link>
								<Link to="/google" className="footer_icon">
									<FaGooglePlusG />
								</Link>
								<Link to="/twitter" className="footer_icon">
									<FaTwitter />
								</Link>
							</li>
							<li>
								<p>Call Now</p>
								<p
									style={{
										color: '#ffffff',
										background:
											'linear-gradient(90deg,rgba(25, 211, 174, 1) 0%,rgba(15, 207, 236, 1) 35%)',
										border: '0',
										borderRadius: '0',
										padding: '0.5rem 1rem',
										display: 'inline-block',
										letterSpacing: '0.1rem',
										fontWeight: '600',
									}}>
									+88 01765872641
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
