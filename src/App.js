import './App.css';
//import React, {useState} from 'react';
import dayjs from 'dayjs'
import * as localeData from 'dayjs/plugin/localeData'
import * as duration from 'dayjs/plugin/duration'
import * as isToday from 'dayjs/plugin/isToday'
//import Datepicker from 'react-tailwindcss-datepicker';
import Calendar from './Calendar'
import MoneyStats from './MoneyStats'

dayjs.extend(localeData)
dayjs.extend(duration)
dayjs.extend(isToday)


function AppHeader() {
	return (
		<div className="AppHeader flex bg-green-300 h-10 items-center justify-evenly">
			<div>Header</div>
			<div>Spending Journal</div>
			<div>Header</div>
		</div>
	)
}

function AppBody() {
	return (
		<div className="AppBody flex flex-col items-center bg-blue-600">
			<h1 className="text-4xl text-center text-teal-400 mt-2">
				{dayjs().format('YYYY-MM-DD')}
			</h1>
			<button className="bg-black text-white p-2.5 w-fit mt-4">
    			{dayjs().format('dddd')}
			</button>
			<div>
				{dayjs().locale('en-us').localeData().weekdaysMin()}
			</div>
			<div>
				{dayjs().startOf('month').day()-1}
			</div>
			<div>
				{dayjs().endOf('month').day()-1}
			</div>
			<Calendar></Calendar>
			<MoneyStats></MoneyStats>
		</div>
	)
}

function App() {
	return (
		<div className="App flex flex-col">
			<AppHeader/> 
			<AppBody/>
		</div>
	);

}

export default App;
