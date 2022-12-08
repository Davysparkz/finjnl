import './App.css';
//import React, {useState} from 'react';
import dayjs from 'dayjs'
//import Datepicker from 'react-tailwindcss-datepicker';
import Calendar from './Calendar'

function AppHeader() {
	return (
		<div className="flex bg-green-300 h-10 items-center justify-evenly">
			<div>Header</div>
			<div>Spending Journal</div>
			<div>Header</div>
		</div>
	)
}

function AppBody() {
	return (
		<div className="flex flex-col items-center bg-blue-600">
			<h1 className="text-4xl text-center text-teal-400 mt-2">
				{dayjs().format('YYYY-MM-DD')}
			</h1>
			<button className="bg-black text-white p-2.5 w-fit mt-4">
    			{dayjs().format('dddd')}
			</button>
			<Calendar></Calendar>
		</div>
	)
}

function App() {
	return (
		<div className="flex flex-col">
			<AppHeader/> 
			<AppBody/>
		</div>
	);

}

export default App;
