import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Hooks/context/AuthProvider';
import NotFound from './Pages/404/NotFound';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<PrivateRoute path="/appointment">
							<Appointment />
						</PrivateRoute>
						<Route path="/login">
							<Login />
						</Route>
						<PrivateRoute path="/dashboard">
							<Dashboard />
						</PrivateRoute>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
