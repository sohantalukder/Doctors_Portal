import React from 'react';
import BookingModals from '../../BookingModals/BookingModals';

const Booking = ({ appoint, date, setBookingSuccess }) => {
	const { name, time, space } = appoint;
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div className="col-md-4 col-sm-6 col-xs-12 px-5 py-4">
			<div className="px-0 py-5 shadow-sm border">
				<h5 className="fw-bold mb-3" style={{ color: '#1CC7C1' }}>
					{name}
				</h5>
				<h6 className="fw-bolder ">{time}</h6>
				<p className="m-0 mb-3 " style={{ color: '#8B8888' }}>
					{space} Space Available
				</p>
				<button
					onClick={() => setModalShow(true)}
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
					BOOK APPOINTMENT
				</button>
				<BookingModals
					date={date}
					appoint={appoint}
					show={modalShow}
					onHide={() => setModalShow(false)}
					setBookingSuccess={setBookingSuccess}
				/>
			</div>
		</div>
	);
};

export default Booking;
