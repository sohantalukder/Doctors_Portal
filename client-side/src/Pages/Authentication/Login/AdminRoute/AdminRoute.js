import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, admin, isLoading } = useAuth();
	if (isLoading) {
		return (
			<div className="d-flex justify-content-center mt-100">
				<div className="spinner"></div>
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}></Redirect>
				)
			}
		/>
	);
};

export default PrivateRoute;
