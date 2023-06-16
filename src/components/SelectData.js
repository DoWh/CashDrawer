import { React } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SelectData( {date, changeDate} ){

	return (
		<DatePicker className="border-2 p-2 rounded-md" selected={date} onChange={(date) => changeDate(date)} />
	);

}


export default SelectData;