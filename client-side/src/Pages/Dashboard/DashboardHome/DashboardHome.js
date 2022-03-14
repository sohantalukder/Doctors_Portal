import React from 'react';
import Calender from '../../Calender/Calender';
import AppointmentView from './AppointmentView/AppointmentView';

const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<div id="content" className="p-4 p-md-5 pt-5">
			<div className=" row p-5">
				<div className="col-md-6 col-sm-12">
					<Calender date={date} setDate={setDate} />
				</div>
				<div className="col-md-6 col-sm-12">
					<AppointmentView date={date} />
				</div>
			</div>
		</div>
	);
};

export default DashboardHome;
