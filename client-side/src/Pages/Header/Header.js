import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
const Header = () => {
	const { user, logout } = useAuth();

	return (
		<div>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="p-0 py-3 sticky-top shadow-sm">
				<Container>
					{/* Navbar Logo */}
					<Link className="navbar-brand p-0 fw-bold" to="/home">
						Doctors Portal
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav>
							<Link to="/home" className=" link text-decoration-none">
								Home
							</Link>
							<Link
								to="/appointment"
								className="className= link  text-decoration-none">
								Appointment
							</Link>
							<Link
								to="/dental-services"
								className=" link text-decoration-none">
								Dental Services
							</Link>
							{user?.email ? (
								<Link to="/dashboard" className=" link text-decoration-none">
									{user.displayName}
								</Link>
							) : (
								<></>
							)}
							{user?.email ? (
								<Link
									onClick={logout}
									to="/login"
									className=" link text-decoration-none">
									LogOut
								</Link>
							) : (
								<Link to="/login" className=" link text-decoration-none">
									Login
								</Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
