import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
	console.log('first');
	return (
		<div className="container">
			<div className="error-wrap ptb-100">
				<div>
					<div className="row">
						<div className="col-md-12">
							<div className="error-content">
								<span className="trans_text v4">Oops!</span>
								<h2>404 error</h2>
								<p>The Page you are looking for is not available</p>
								<Link className="btn v1 mt-3 theme-btn" to="/home">
									<BiArrowBack className="i" />
									Back to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
