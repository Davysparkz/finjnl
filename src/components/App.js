import '../styles/App.css';
import dayjs from 'dayjs'
import Calendar from './Calendar'
import MoneyStats from './MoneyStats'
// import * as cal from '../utils/util'
//import DayjsWrapper from '../utils/DayjsWrapper'


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
			<Calendar></Calendar>
			<MoneyStats></MoneyStats>
		</div>
	)
}

function App() {
	return (
		<div className="App flex flex-col h-screen">
			<AppHeader/> 
			<AppBody/>
		</div>
	);

}

export default App;
