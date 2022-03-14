import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Authentication/Login/AdminRoute/AdminRoute';
import AddDoctor from './AddDoctor/AddDoctor';
import Admin from './Admin/Admin';
import './Dashboard.css';
import DashboardHome from './DashboardHome/DashboardHome';
const Dashboard = () => {
	const { user, admin } = useAuth();
	let { path, url } = useRouteMatch();
	return (
		<div className="wrapper d-flex align-items-stretch">
			<nav id="sidebar" className="">
				<div
					className="img bg-wrap text-center text-primary py-4 "
					id="offcanvasNavbar"
					style={{ fontWeight: '700', background: '#6ACECE' }}>
					<div className="user-logo">
						<h3 className="text-center text-black">{user.displayName}</h3>
					</div>
				</div>
				<ul className="list-unstyled components mb-5">
					<li className="active">
						<Link to={`${url}`}>Home</Link>
					</li>
					{admin && (
						<ul>
							<li>
								<Link to={`${url}/makeAdmin`}>Admin</Link>
							</li>
							<li>
								<Link to={`${url}/addDoctor`}>Add Doctor</Link>
							</li>
						</ul>
					)}
				</ul>
			</nav>
			<Switch>
				<Route exact path={path}>
					<DashboardHome />
				</Route>
				<AdminRoute exact path={`${path}/makeAdmin`}>
					<Admin />
				</AdminRoute>

				<AdminRoute exact path={`${path}/addDoctor`}>
					<AddDoctor />
				</AdminRoute>
			</Switch>
		</div>
	);
};

export default Dashboard;
