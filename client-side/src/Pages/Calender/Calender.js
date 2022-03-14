import React from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './Calender.css';
const Calender = ({ data, setDate }) => {
	return (
		<Calendar
			value={data}
			onChange={(newValue) => {
				setDate(newValue);
			}}
			calendarClassName="responsive-calendar" // added this
			shouldHighlightWeekends
		/>
	);
};

export default Calender;
