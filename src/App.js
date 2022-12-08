import './App.css';
//import React, {useState} from 'react';
import dayjs from 'dayjs'
//import Datepicker from 'react-tailwindcss-datepicker';
import Calendar from './Calendar'

function App() {
	return (
		<div className="flex flex-col items-center mt-16">
		<h1 className="text-4xl text-center">
		Tailwind CSS makes styling React components easier!
		</h1>
		<button className="bg-black text-white p-2.5 w-fit mt-9">
    {dayjs().format('dddd')}
		</button>
		<Calendar></Calendar>
		</div>
	);

}

export default App;
