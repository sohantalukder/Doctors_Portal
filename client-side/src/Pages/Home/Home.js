import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Blogs from './Blogs/Blogs';
import ContactUs from './ContactUs/ContactUs';
import DentalCareBanner from './DentalCareBanner/DentalCareBanner';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
	return (
		<div className="">
			<TopBanner />
			<Services />
			<DentalCareBanner />
			<AppointmentBanner />
			<Testimonial />
			<Blogs />
			<Doctors />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default Home;
